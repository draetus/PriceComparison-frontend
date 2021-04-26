import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '../../../components';

class ShoppingCartContainer extends Component {

  render() {

    return (
      <Typography>TESTE SHOPPING CART</Typography>
    )
  }

}


function mapStateToProps(state) {
    return {

    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);