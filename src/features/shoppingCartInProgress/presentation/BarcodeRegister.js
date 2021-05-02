import React, { Component } from 'react';
import { BarcodeScanner } from '../../../components';

class BarcodeRegister extends Component {

    onBarCodeRead = (barcode) => {
        const { openAddProductToShoppingCartModalRequest, clear, id, products, shoppingListProducts } = this.props;
        openAddProductToShoppingCartModalRequest({
            barcode: barcode, 
            shoppingListId: id, 
            shoppingListProducts: shoppingListProducts, 
            shoppingCartProducts: products
        });
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