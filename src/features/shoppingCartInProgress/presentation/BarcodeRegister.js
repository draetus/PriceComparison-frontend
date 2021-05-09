import React, { Component } from 'react';
import GetLocation from 'react-native-get-location'
import { BarcodeScanner } from '../../../components';

class BarcodeRegister extends Component {

    onBarCodeRead = (barcode) => {
        const { openAddProductToShoppingCartModalRequest, clear, id, products, shoppingListProducts } = this.props;
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
          })
          .then(location => {
            openAddProductToShoppingCartModalRequest({
                lat: location.latitude,
                lon: location.longitude,
                barcode: barcode, 
                shoppingListId: id, 
                shoppingListProducts: shoppingListProducts, 
                shoppingCartProducts: products
            });
            clear();
          })
          .catch(error => {
              const { code, message } = error;
              console.warn(code, message);
          })
        
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