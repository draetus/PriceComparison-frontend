import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';
import { goBack } from "../../../navigation/NavigationHelpers"
import ManualRegister from './ManualRegister';
import BarcodeRegister from './BarcodeRegister';

class ShoppingListDetailsPresentation extends Component {

constructor(props) {
    super(props);
    this.state = {
        manualAdd: false,
        barcodeAdd: false

    }
}

clear() {
    this.setState({manualAdd: false, barcodeAdd: false});
}

Selector = () => {
  const {manualAdd, barcodeAdd} = this.state;
  const {openAddProductToShoppingListModalRequest, id} = this.props;  

    if (manualAdd) {
        return (
            <ManualRegister
                openAddProductToShoppingListModalRequest={openAddProductToShoppingListModalRequest}
                id = {id}
                clear = {() => this.clear()}
            />
        )
    }

    if (barcodeAdd) {
        return (
            <BarcodeRegister
                openAddProductToShoppingListModalRequest={openAddProductToShoppingListModalRequest}
                id = {id}
                clear = {() => this.clear()}
            />
        )
    }

    
    return (
    <>
        <ButtonContained onPress={() => this.setState({ manualAdd: true, barcodeAdd: false })}> REGISTRO MANUAL  </ ButtonContained>
        <ButtonContained onPress={() => this.setState({ manualAdd: false, barcodeAdd: true })}> REGISTRO PELA CÂMERA  </ ButtonContained>
    </>
    );
        
}

  ProductList = () => {
    const {id, shoppingListProducts = [], deleteProductFromShoppingListRequest} = this.props;

        return (
          shoppingListProducts.map((item, index) => (
                <ButtonContained onPress={() => {
                  deleteProductFromShoppingListRequest({id: id, barcode: item.barcode});
                }}
                key = {item.barcode}> {item.name} </ButtonContained>
            ))
        )
  }

  render() {

    const {id, name, deleteShoppingListsRequest} = this.props;

    return (
      <>
        <Typography> {name} </Typography>
        <Typography> {"id: " + id} </Typography>

        <this.ProductList />

        <ButtonContained 
            onPress={() => {
                deleteShoppingListsRequest({id});
                goBack();
            }} 
        >
          DELETAR LISTA
        </ButtonContained>

        <this.Selector />
        
      </>
    )
  }

}
  
export default (ShoppingListDetailsPresentation);