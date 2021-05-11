import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import GetLocation from 'react-native-get-location';
import { Creators as SearchProductCreators } from '../../features/searchProduct/reduxSagas';
import { ButtonContained } from '..';

class BarcodeScanner extends Component {
    constructor(props) {
        super(props);
        this.handleTourch = this.handleTourch.bind(this);
        this.state = {
            torchOn: false
        }
    }

    onBarCodeRead = (e) => {
        const {onBarCodeRead, searchSingleProductRequest} = this.props;

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
          })
          .then(location => {
            searchSingleProductRequest({
                barcode: e.data, 
                lat: location.latitude, 
                lon: location.longitude
            }); 
            console.log("ENVIOU LOCALIZAÇÃO");
          })
          .catch(error => {
              const { code, message } = error;
              console.warn(code, message);
          })

        // onBarCodeRead(e.data);
    }

    render() {
        const {singleProduct, clearSingleProduct, onBarCodeRead} = this.props;

        console.log("RENDER: ", singleProduct);
        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    flashMode={this.state.torchOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    type={RNCamera.Constants.Type.back}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                >
                    {
                        singleProduct != null ?
                        (
                        <>
                        <Text style={styles.bestPrice}> {"R$ " + singleProduct.bestPrice.price} </Text>
                        <Text style={styles.bestPrice}> { + singleProduct.bestPrice.distance + " Metros"} </Text>
                        <Text style={styles.bestPriceNear}> {"R$ " +singleProduct.bestPriceNear.price} </Text>
                        <Text style={styles.bestPriceNear}> {singleProduct.bestPriceNear.distance + " Metros"} </Text>
                        <Text style={styles.averagePrice}> {"R$ " + singleProduct.averagePrice} </Text>
                        {onBarCodeRead 
                        ? (<ButtonContained onPress={() => {onBarCodeRead(singleProduct.barcode);}}> CONCLUIR </ButtonContained>)
                        : <></>
                        }
                        <ButtonContained onPress={clearSingleProduct}> LIMPAR </ButtonContained>
                        <Text style={styles.barcodeScannerText}> {singleProduct.name} </Text>
                        </>
                        )
                        : <Text style={styles.barcodeScannerText}> APONTE PARA UM CÓDIGO DE BARRAS </Text>
                    }
                    
                    
                </RNCamera>
                <View style={styles.bottomOverlay}>
                    <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
                        <Image style={styles.cameraIcon}
                        source={this.state.torchOn === true ? require('../../images/flasher_on.png') : require('../../images/flasher_off.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            )
    }

    handleTourch(value) {
        if (value === true) {
            this.setState({ torchOn: false });
        } else {
            this.setState({ torchOn: true });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cameraIcon: {
        margin: 5,
        height: 40,
        width: 40
    },
    bottomOverlay: {
        position: "absolute",
        width: "100%",
        flex: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    barcodeScannerText: {
        color: "white"
    },
    averagePrice: {
        backgroundColor: "#0000ff"
    },
    bestPrice: {
        backgroundColor: "#008000"
    },
    bestPriceNear: {
        backgroundColor: "#ffff00"
    }
});

function mapStateToProps(state) {
    const {singleProduct} = state.searchProduct;
    return {
        singleProduct
    };
  }
  
function mapDispatchToProps(dispatch) {
    const { searchSingleProductRequest, clearSingleProduct } = SearchProductCreators;
    return {
      searchSingleProductRequest: function ({barcode, lat, lon}) {
        return dispatch(searchSingleProductRequest(barcode, lat, lon));
      },
      clearSingleProduct: function() {
          return dispatch(clearSingleProduct());
      }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeScanner);