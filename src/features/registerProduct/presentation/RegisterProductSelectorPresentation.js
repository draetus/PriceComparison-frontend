import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonContained, Input, Typography } from '../../../components';
import BarcodeRegister from './BarcodeRegister';
import ManualRegister from './ManualRegister';

class SearchProductSelectorPresentation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            manualRegister: false,
            barcodeRegister: false

        }
    }

    clear() {
        this.setState({manualRegister: false, barcodeRegister: false});
    }

    Selector = () => {
        return (
            <View style={styles.selectorGroup}>
                <View style={styles.selectorSubGroup}>
                    <ButtonContained style={styles.selectorButton} onPress={() => this.setState({ manualRegister: true, barcodeRegister: false })}> REGISTRO MANUAL  </ ButtonContained>
                    <ButtonContained style={styles.selectorButton} onPress={() => this.setState({ manualRegister: false, barcodeRegister: true })}> REGISTRO PELA CÂMERA  </ ButtonContained>
                </View>
            </View>
        )
    }

    RegisterProductManual = () => {
        const {openRegisterProductModalRequest} = this.props;
        return (
            <ManualRegister 
                openRegisterProductModalRequest={openRegisterProductModalRequest}
                clear = {() => this.clear()}
            />
        )
    }

    RegisterProductBarcode = () => {
        const {openRegisterProductModalRequest} = this.props;
        return (
            <BarcodeRegister 
                openRegisterProductModalRequest={openRegisterProductModalRequest}
                clear = {() => this.clear()}
            />
        )
    }

    render() {
        const {manualRegister, barcodeRegister} = this.state;

        if (manualRegister) {
            return (
                <this.RegisterProductManual />
            )
        }

        if (barcodeRegister) {
            return (
                <this.RegisterProductBarcode />
            )
        }

        return <this.Selector />
        
    }

}

const styles = StyleSheet.create({
    selectorButton: {
        display: "flex",
        flexWrap: "wrap",
        width: "45%",
        borderColor: "#a10013",
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10
    },
    selectorGroup: {
        display: "flex",
    },
    selectorSubGroup: {
        display: "flex",
        flexDirection: "row"
    }
  });

export default SearchProductSelectorPresentation;