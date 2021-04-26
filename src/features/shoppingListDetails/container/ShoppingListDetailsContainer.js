import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ShoppingListDetailsPresentation} from '../presentation';
import {Creators as ShoppingListCreators} from '../../shoppingList/reduxSagas';
import {Creators as CustomModalCreators} from '../../../modals/reduxSagas';

class ShoppingListDetailsContainer extends Component {

  componentDidMount() {
    const { id, searchShoppingListProductsRequest } = this.props;
    searchShoppingListProductsRequest({id});
  }


  render() {

    const {id, name, shoppingListProducts, deleteShoppingListsRequest, deleteProductFromShoppingListRequest, openAddProductToShoppingListModalRequest} = this.props;

    return (
      <ShoppingListDetailsPresentation
      id={id}
      name={name}
      shoppingListProducts={shoppingListProducts}
      deleteShoppingListsRequest={deleteShoppingListsRequest}
      deleteProductFromShoppingListRequest={deleteProductFromShoppingListRequest}
      openAddProductToShoppingListModalRequest={openAddProductToShoppingListModalRequest}
      />
    )
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
  const { deleteShoppingListsRequest, searchShoppingListProductsRequest, deleteProductFromShoppingListRequest } = ShoppingListCreators;
  const { openAddProductToShoppingListModalRequest } = CustomModalCreators;
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
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListDetailsContainer);