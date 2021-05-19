import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonContained, Typography } from '../../../components';
import {Navigation} from "../../../navigation"

class ShoppingCartPresentation extends Component {

  ShoppingLists = () => {
    const { shoppinglists = [] } = this.props;

    return (
      <>
      {shoppinglists.map((item, index) => (
        <ButtonContained 
        style={styles.productButton}
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
        style={styles.productButton}
        onPress={() => {
          Navigation.toShoppingCartInProgress({noShoppingList: true});
        }}
        > SEGUIR SEM LISTA </ButtonContained>
      </>
    )
  }

}

const styles = StyleSheet.create({
  productButton: {
      display: "flex",
      flexWrap: "wrap",
      borderColor: "#a10013",
      borderWidth: 2,
      marginLeft: 50,
      marginRight: 50
  }
});
  
export default ShoppingCartPresentation;