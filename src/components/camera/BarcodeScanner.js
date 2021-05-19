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
            torchOn: false,
            barcodeData: null
        }
    }

    clearData() {
        this.setState({
            barcodeData: null
        })
    }

    onBarCodeRead = (e) => {
        const {searchSingleProductRequest} = this.props;

        console.log("BARCODEREAD: ", e);

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
          })
          .catch(error => {
              const { code, message } = error;
              console.warn(code, message);
          })

        this.setState({
            barcodeData: e.data
        });
    }

    render() {
        const {singleProduct, clearSingleProduct, onBarCodeRead} = this.props;
        const {barcodeData} = this.state;

        console.log("BARCODE RENDER: ", singleProduct);

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
                        <View style={styles.cameraComponentContainer} >
                            <View>
                                {singleProduct.bestPrice?.price ? <Text style={styles.bestPrice}> {"R$ " + singleProduct.bestPrice?.price} </Text> : <></>}
                                {singleProduct.bestPrice?.distance ? <Text style={styles.bestPrice}> { + singleProduct.bestPrice?.distance.toFixed(2) + " KM"} </Text> : <></>}
                            </View>
                            <View style={styles.rightPriceContainer}>
                                {singleProduct.bestPriceNear?.price ? <Text style={styles.bestPriceNear}> {"R$ " +singleProduct.bestPriceNear?.price} </Text> : <></>}
                                {singleProduct.bestPriceNear?.distance ? <Text style={styles.bestPriceNear}> {singleProduct.bestPriceNear?.distance.toFixed(2) + " KM"} </Text> : <></>}
                            </View>
                        </View>
                        <View>
                            {singleProduct.averagePrice ? <Text style={styles.averagePrice}> {"R$ " + singleProduct.averagePrice.toFixed(2)} </Text> : <></>}
                        </View>
                        <Text style={styles.barcodeScannerText}> {singleProduct.name} </Text>
                        <View style={styles.cameraComponentContainer}>
                            {onBarCodeRead 
                            ? (<ButtonContained style={styles.barcodeButton} onPress={() => {onBarCodeRead(barcodeData);}}> CONCLUIR </ButtonContained>)
                            : <></>
                            }
                            <ButtonContained style = {styles.barcodeButton} onPress={() => {
                                clearSingleProduct();
                                this.clearData();
                                }}> LIMPAR </ButtonContained>
                        </View>
                        </>
                        )
                        : 
                            barcodeData 
                                ? 
                                (
                                    <View style={styles.cameraComponentContainer}>
                                        {onBarCodeRead 
                                        ? (<ButtonContained style={styles.barcodeButton} onPress={() => {onBarCodeRead(barcodeData);}}> CONCLUIR </ButtonContained>)
                                        : <></>
                                        }
                                        <ButtonContained style = {styles.barcodeButton} onPress={() => {
                                            clearSingleProduct();
                                            this.clearData();
                                            }}> LIMPAR </ButtonContained>
                                    </View>
                                ) 
                                :
                                <Text style={styles.barcodeScannerText}> APONTE PARA UM CÓDIGO DE BARRAS </Text>
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
        paddingHorizontal: 10
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
        backgroundColor: "#ffff00",
        textAlign: "right"
    },
    rightPriceContainer: {
        textAlign: "right"
    },
    barcodeButton: {

    },
    cameraComponentContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
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