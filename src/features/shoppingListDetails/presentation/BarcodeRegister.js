import React, { Component } from 'react';
import { BarcodeScanner } from '../../../components';

class BarcodeRegister extends Component {

    onBarCodeRead = (barcode) => {
        const { openAddProductToShoppingListModalRequest, id, clear } = this.props;
        openAddProductToShoppingListModalRequest({barcode, id});
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