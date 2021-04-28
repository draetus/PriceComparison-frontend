import React, { Component } from 'react';
import { ButtonContained, Typography } from '../../../components';
import {Navigation} from "../../../navigation"

class ShoppingCartPresentation extends Component {

  ShoppingLists = () => {
    const { shoppinglists = [] } = this.props;

    return (
      <>
      {shoppinglists.map((item, index) => (
        <ButtonContained 
        key = {item.id}
        onPress={() => {
          Navigation.toShoppingCartInProgress(item);
        }}
        > {item.name} </ButtonContained>
      ))}
      </>
    )
  }

  render() {

    return (
      <>
        <Typography>SELECIONE UMA LISTA DE COMPRAS</Typography>
        <this.ShoppingLists />
        <ButtonContained 
        onPress={() => {
          Navigation.toShoppingCartInProgress(null);
        }}
        > SEGUIR SEM LISTA </ButtonContained>
      </>
    )
  }

}
  
export default ShoppingCartPresentation;