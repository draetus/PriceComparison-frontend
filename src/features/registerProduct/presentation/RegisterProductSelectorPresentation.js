import React, { Component } from 'react';
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

    Selector = () => {
        return (
            <>
                <ButtonContained onPress={() => this.setState({ manualRegister: true, barcodeRegister: false })}> REGISTRO MANUAL  </ ButtonContained>
                <ButtonContained onPress={() => this.setState({ manualRegister: false, barcodeRegister: true })}> REGISTRO PELA CÂMERA  </ ButtonContained>
            </>
        )
    }

    RegisterProductManual = () => {
        const {openRegisterProductModalRequest} = this.props;
        return (
            <ManualRegister 
                openRegisterProductModalRequest={openRegisterProductModalRequest}
            />
        )
    }

    RegisterProductBarcode = () => {
        const {openRegisterProductModalRequest} = this.props;
        return (
            <BarcodeRegister 
                openRegisterProductModalRequest={openRegisterProductModalRequest}
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

export default SearchProductSelectorPresentation;