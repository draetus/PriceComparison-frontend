import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Creators as ShoppingListCreators} from '../../shoppingList/reduxSagas';
import {Creators as ShoppingCartCreators} from '../reduxSagas';
import {ShoppingCartInProgressPresentation} from '../presentation';

class ShoppingCartInProgressContainer extends Component {

  componentDidMount() {
    const { id, searchShoppingListProductsRequest } = this.props;
    searchShoppingListProductsRequest({id});
  }

  render() {

    const { id, name, shoppingListProducts, products, updateShoppingCart, clearShoppingCart } = this.props;

    return (
      <ShoppingCartInProgressPresentation
      id={id}
      name={name}
      shoppingListProducts={shoppingListProducts}
      products={products}
      updateShoppingCart={updateShoppingCart}
      clearShoppingCart={clearShoppingCart}
      />
    )
  }

}


function mapStateToProps(state) {
  const {shoppingListProducts, isFetchingShoppingListProducts} = state.shoppingList;
  const {products} = state.shoppingCart;
  return {
    isFetching: isFetchingShoppingListProducts,
    shoppingListProducts,
    products
  };
}

function mapDispatchToProps(dispatch) {
const { searchShoppingListProductsRequest } = ShoppingListCreators;
const { updateShoppingCart, clearShoppingCart } = ShoppingCartCreators;
  return {
    searchShoppingListProductsRequest: function({id}) {
      return dispatch(searchShoppingListProductsRequest(id));
    },
    updateShoppingCart: function({products}) {
      return dispatch(updateShoppingCart(products));
    },
    clearShoppingCart: function() {
      return dispatch(clearShoppingCart());
    }
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartInProgressContainer);