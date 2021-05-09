import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Creators as ShoppingListCreators} from '../../shoppingList/reduxSagas';
import {Creators as ShoppingCartCreators} from '../reduxSagas';
import {Creators as CustomModalCreators} from '../../../modals/reduxSagas';
import {ShoppingCartInProgressPresentation} from '../presentation';

class ShoppingCartInProgressContainer extends Component {

  componentDidMount() {
    const { id, searchShoppingListProductsRequest } = this.props;
    searchShoppingListProductsRequest({id});
  }

  render() {

    const { id, name, shoppingListProducts, products, updateShoppingCart, clearShoppingCart, openAddProductToShoppingCartModalRequest } = this.props;

    console.log("SHOPPING CART CONTAINER: ", products);

    return (
      <ShoppingCartInProgressPresentation
      id={id}
      name={name}
      shoppingListProducts={shoppingListProducts}
      products={products}
      updateShoppingCart={updateShoppingCart}
      clearShoppingCart={clearShoppingCart}
      openAddProductToShoppingCartModalRequest={openAddProductToShoppingCartModalRequest}
      />
    )
  }

}


function mapStateToProps(state) {
  const {shoppingListProducts, isFetchingShoppingListProducts} = state.shoppingList;
  const {products, isFetching} = state.shoppingCart;
  return {
    isFetching: isFetchingShoppingListProducts || isFetching,
    shoppingListProducts,
    products
  };
}

function mapDispatchToProps(dispatch) {
const { searchShoppingListProductsRequest } = ShoppingListCreators;
const { updateShoppingCart, clearShoppingCart } = ShoppingCartCreators;
const { openAddProductToShoppingCartModalRequest } = CustomModalCreators;
  return {
    searchShoppingListProductsRequest: function({id}) {
      return dispatch(searchShoppingListProductsRequest(id));
    },
    updateShoppingCart: function({products}) {
      return dispatch(updateShoppingCart(products));
    },
    clearShoppingCart: function() {
      return dispatch(clearShoppingCart());
    },
    openAddProductToShoppingCartModalRequest: function({barcode, lat, lon, shoppingListId, shoppingListProducts, shoppingCartProducts}) {
      return dispatch(openAddProductToShoppingCartModalRequest(barcode, lat, lon, shoppingListId, shoppingListProducts, shoppingCartProducts));
    }
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartInProgressContainer);