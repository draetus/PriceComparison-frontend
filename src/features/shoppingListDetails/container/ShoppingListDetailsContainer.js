import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ShoppingListDetailsPresentation} from '../presentation';
import {Creators as ShoppingListCreators} from '../../shoppingList/reduxSagas';
import {Creators as CustomModalCreators} from '../../../modals/reduxSagas';
import {Creators as SearchProductCreators} from "../../searchProduct/reduxSagas";

class ShoppingListDetailsContainer extends Component {

  componentDidMount() {
    const { id, searchShoppingListProductsRequest } = this.props;
    searchShoppingListProductsRequest({id});
  }


  render() {

    const {
      id, 
      name, 
      shoppingListProducts, 
      products, 
      deleteShoppingListsRequest, 
      deleteProductFromShoppingListRequest, 
      openAddProductToShoppingListModalRequest, 
      searchProductsRequest
    } = this.props;

    return (
      <ShoppingListDetailsPresentation
      id={id}
      name={name}
      shoppingListProducts={shoppingListProducts}
      products={products}
      deleteShoppingListsRequest={deleteShoppingListsRequest}
      deleteProductFromShoppingListRequest={deleteProductFromShoppingListRequest}
      openAddProductToShoppingListModalRequest={openAddProductToShoppingListModalRequest}
      searchProductsRequest={searchProductsRequest}
      />
    )
  }

}


function mapStateToProps(state) {
    const {shoppingListProducts, isFetchingShoppingListProducts} = state.shoppingList;
    const {products} = state.searchProduct;
    return {
      isFetching: isFetchingShoppingListProducts,
      shoppingListProducts,
      products
    };
  }
  
function mapDispatchToProps(dispatch) {
  const { deleteShoppingListsRequest, searchShoppingListProductsRequest, deleteProductFromShoppingListRequest } = ShoppingListCreators;
  const { openAddProductToShoppingListModalRequest } = CustomModalCreators;
  const { searchProductsRequest } = SearchProductCreators;
    return {
      deleteShoppingListsRequest: function ({id}) {
        return dispatch(deleteShoppingListsRequest(id))
      },
      searchShoppingListProductsRequest: function({id}) {
        return dispatch(searchShoppingListProductsRequest(id));
      },
      deleteProductFromShoppingListRequest: function({id, barcode}) {
        return dispatch(deleteProductFromShoppingListRequest(id, barcode));
      },
      openAddProductToShoppingListModalRequest: function ({barcode, id}) {
        return dispatch(openAddProductToShoppingListModalRequest(id, barcode));
      },
      searchProductsRequest: function({name}) {
        return dispatch(searchProductsRequest(name));
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListDetailsContainer);