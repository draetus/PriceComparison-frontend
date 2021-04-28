import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Creators as ShoppingListCreators} from '../../shoppingList/reduxSagas';
import {ShoppingCartInProgressPresentation} from '../presentation';
import { Typography } from '../../../components';

class ShoppingCartInProgressContainer extends Component {

  componentDidMount() {
    const { id, searchShoppingListProductsRequest } = this.props;
    searchShoppingListProductsRequest({id});
  }

  render() {

    const { id, name, shoppingListProducts } = this.props;

    return (
      <ShoppingCartInProgressPresentation
      id={id}
      name={name}
      shoppingListProducts={shoppingListProducts}
      />
    )
    // return (<Typography>TESTE</Typography>)
  }

}


function mapStateToProps(state) {
  const {shoppingListProducts, isFetchingShoppingListProducts} = state.shoppingList;
  return {
    isFetching: isFetchingShoppingListProducts,
    shoppingListProducts
  };
}

function mapDispatchToProps(dispatch) {
const { searchShoppingListProductsRequest } = ShoppingListCreators;
  return {
    searchShoppingListProductsRequest: function({id}) {
      return dispatch(searchShoppingListProductsRequest(id));
    },
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartInProgressContainer);