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

    const {shoppinglists, createShoppingListsRequest, deleteShoppingListsRequest} = this.props;

    return (
      <ShoppingListPresentation 
        shoppinglists={shoppinglists}
        deleteShoppingListsRequest={deleteShoppingListsRequest}
      />
    )
  }


}


function mapStateToProps(state) {
    const {isFetchingShoppingList, isFetchingCreateShoppingList, isFetchingDeleteShoppingList, shoppinglists} = state.shoppingList;
    return {
      isFetching : isFetchingShoppingList || isFetchingCreateShoppingList || isFetchingDeleteShoppingList,
      shoppinglists
    };
  }
  
function mapDispatchToProps(dispatch) {
    const { searchShoppingListsRequest, createShoppingListsRequest, deleteShoppingListsRequest } = Creators;
    return {
      searchShoppingListsRequest: function () {
        return dispatch(searchShoppingListsRequest())
      },
      deleteShoppingListsRequest: function ({id}) {
        return dispatch(deleteShoppingListsRequest(id))
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListContainer);