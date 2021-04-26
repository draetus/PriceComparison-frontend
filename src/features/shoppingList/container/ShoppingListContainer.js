import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ShoppingListPresentation} from '../presentation';
import {Creators} from '../reduxSagas';

class ShoppingListContainer extends Component {

  componentDidMount() {
    const {searchShoppingListsRequest} = this.props;
    searchShoppingListsRequest();
  }

  render() {

    const {shoppinglists, shoppingListProducts, deleteShoppingListsRequest, searchShoppingListProductsRequest } = this.props;

    return (
      <ShoppingListPresentation 
        shoppinglists={shoppinglists}
        shoppingListProducts={shoppingListProducts}
        deleteShoppingListsRequest={deleteShoppingListsRequest}
        searchShoppingListProductsRequest={searchShoppingListProductsRequest}
      />
    )
  }

}


function mapStateToProps(state) {
    const {
      isFetchingShoppingList, 
      isFetchingCreateShoppingList, 
      isFetchingDeleteShoppingList, 
      isFetchingShoppingListProducts,
      isFetchingAddProductToShoppingList, 
      shoppinglists,
      shoppingListProducts} = state.shoppingList;
    return {
      isFetching : 
        isFetchingShoppingList || 
        isFetchingCreateShoppingList || 
        isFetchingDeleteShoppingList || 
        isFetchingShoppingListProducts ||
        isFetchingAddProductToShoppingList,
      shoppinglists,
      shoppingListProducts
    };
  }
  
function mapDispatchToProps(dispatch) {
    const { searchShoppingListsRequest, deleteShoppingListsRequest, searchShoppingListProductsRequest } = Creators;
    return {
      searchShoppingListsRequest: function () {
        return dispatch(searchShoppingListsRequest())
      },
      deleteShoppingListsRequest: function ({id}) {
        return dispatch(deleteShoppingListsRequest(id))
      },
      searchShoppingListProductsRequest: function({id}) {
        return dispatch(searchShoppingListProductsRequest(id));
      },
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListContainer);