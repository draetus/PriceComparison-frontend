import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import GetLocation from 'react-native-get-location'
import { ButtonContained, Input, Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';

class ManualRegister extends Component {

    render() {
        return (
        <>
        <Typography> ADICINAR AO CARRINHO DE COMPRAS </Typography>
        <FormHolder
            onSubmit={(data) => {
                const { openAddProductToShoppingCartModalRequest, clear, id, products, shoppingListProducts } = this.props;
                GetLocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 15000,
                  })
                  .then(location => {
                    openAddProductToShoppingCartModalRequest({
                        lat: location.latitude,
                        lon: location.longitude,
                        barcode: data.barcode, 
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
            }}
        >
            <Input name="barcode" inputLabel="CÓDIGO DE BARRAS" />

            <ButtonContained style={styles.submitButton} type="submit" loading={false} > VERIFICAR CÓDIGO DE BARRAS </ButtonContained>
        </FormHolder>
        </>
        )
    }

}

const styles = StyleSheet.create({
    submitButton: {
        display: "flex",
        flexWrap: "wrap",
        width: "50%",
        borderColor: "#a10013",
        borderWidth: 2
    }
  });

export default ManualRegister;