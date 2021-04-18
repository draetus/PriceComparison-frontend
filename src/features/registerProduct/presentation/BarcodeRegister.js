import React, { Component } from 'react';
import { BarcodeScanner } from '../../../components';

class BarcodeRegister extends Component {

    onBarCodeRead = (barcode) => {
        const { openRegisterProductModalRequest } = this.props;
        openRegisterProductModalRequest({barcode});
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