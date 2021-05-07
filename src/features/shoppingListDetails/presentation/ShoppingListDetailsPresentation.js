import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonContained, Typography } from '../../../components';
import { goBack } from "../../../navigation/NavigationHelpers"
import ManualRegister from './ManualRegister';
import { Avatar, Card, IconButton } from 'react-native-paper';

class ShoppingListDetailsPresentation extends Component {

constructor(props) {
    super(props);
}

clear() {
    this.setState({manualAdd: false, barcodeAdd: false});
}

Selector = () => {
  const {openAddProductToShoppingListModalRequest, searchProductsRequest, id, products} = this.props;  

    return (
        <ManualRegister
            openAddProductToShoppingListModalRequest={openAddProductToShoppingListModalRequest}
            searchProductsRequest={searchProductsRequest}
            id={id}
            products={products}
            clear = {() => this.clear()}
        />
    )
        
}

  ProductList = () => {
    const {id, shoppingListProducts = [], deleteProductFromShoppingListRequest} = this.props;

        return (
          <>
          <ScrollView style={styles.productList}>
          <Typography> LISTA DE COMPRAS</Typography>
            {shoppingListProducts.map((item, index) => (
                  <Card.Title
                  title={item.name}
                  subtitle={"QTD: " + item.quantity}
                  left={(props) => <Avatar.Icon {...props} icon="shopping" />}
                  right={(props) => <IconButton 
                                      {...props} 
                                      icon="delete" 
                                      onPress={() => {
                                        deleteProductFromShoppingListRequest({id: id, barcode: item.barcode});
                                      }} 
                                    />
                  }
                  />
              ))}
          </ScrollView>
          </>
        )
  }

  render() {

    const {id, name, deleteShoppingListsRequest} = this.props;

    return (
      <>
        <Typography> {name} </Typography>

        <this.Selector />

        <this.ProductList />

        <ButtonContained 
            onPress={() => {
                deleteShoppingListsRequest({id});
                goBack();
            }} 
        >
          DELETAR LISTA
        </ButtonContained>
        
      </>
    )
  }

}

const styles = StyleSheet.create({
  productList: {
    flex: 0.1,
    maxHeight: 300
  }
});
  
export default (ShoppingListDetailsPresentation);