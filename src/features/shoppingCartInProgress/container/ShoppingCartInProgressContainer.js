import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '../../../components';
import {Creators as ShoppingListCreators} from '../../shoppingList/reduxSagas';

class ShoppingCartInProgressContainer extends Component {

  render() {

    const { id, name } = this.props;

    return (
      <>
      <Typography>TESTE SHOPPING CART IN PROGRESS</Typography>
      <Typography>{id}</Typography>
      <Typography>{name}</Typography>
      </>
    )
  }

}


// function mapStateToProps(state) {
//   const {
//     isFetchingShoppingList, 
//     shoppinglists
//   } = state.shoppingList;
//     return {
//       isFetching: isFetchingShoppingList,
//       shoppinglists
//     };
//   }
  
// function mapDispatchToProps(dispatch) {
//   const { searchShoppingListsRequest } = ShoppingListCreators;
//     return {
//       searchShoppingListsRequest: function () {
//         return dispatch(searchShoppingListsRequest())
//       },
//     };
//   }
  
// export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartInProgressContainer);
export default (ShoppingCartInProgressContainer);