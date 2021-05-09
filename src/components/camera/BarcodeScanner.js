import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class BarcodeScan extends Component {
    constructor(props) {
        super(props);
        this.handleTourch = this.handleTourch.bind(this);
        this.state = {
            torchOn: false
        }
    }

    onBarCodeRead = (e) => {
        const {onBarCodeRead} = this.props;
        onBarCodeRead(e.data);
    }

    render() {
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
                    <Text 
                    style={styles.barcodeScannerText}
                    >
                        APONTE PARA UM CÓDIGO DE BARRAS
                    </Text>
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
    }
});