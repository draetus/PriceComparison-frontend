import React, { Component } from 'react';
import { BarcodeScanner } from '../../../components';

class BarcodeRegister extends Component {

    onBarCodeRead = (barcode) => {
        const { openRegisterProductModalRequest, clear } = this.props;
        openRegisterProductModalRequest({barcode});
        clear();
    }

    render() {
        return (
        <>
            <BarcodeScanner
            onBarCodeRead={this.onBarCodeRead} 
            />
        </>
        )
    }

}

export default BarcodeRegister;