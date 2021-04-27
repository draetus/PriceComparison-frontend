import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ShoppingCartPresentation} from '../presentation';
import {Creators as ShoppingListCreators} from '../../shoppingList/reduxSagas';

class ShoppingCartContainer extends Component {

  componentDidMount() {
    const { searchShoppingListsRequest } = this.props;
    searchShoppingListsRequest();
  }

  render() {

    const { shoppinglists } = this.props;

    return (
      <ShoppingCartPresentation 
      shoppinglists={shoppinglists}
      />
    )
  }

}


function mapStateToProps(state) {
  const {
    isFetchingShoppingList, 
    shoppinglists
  } = state.shoppingList;
    return {
      isFetching: isFetchingShoppingList,
      shoppinglists
    };
  }
  
function mapDispatchToProps(dispatch) {
  const { searchShoppingListsRequest } = ShoppingListCreators;
    return {
      searchShoppingListsRequest: function () {
        return dispatch(searchShoppingListsRequest())
      },
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);