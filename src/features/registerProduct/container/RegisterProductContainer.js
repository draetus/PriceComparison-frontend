import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterProductSelectorPresentation } from '../presentation';
import {Creators as CustomModalCreators} from '../../../modals/reduxSagas';

class RegisterProductContainer extends Component {

    render() {
        const { openRegisterProductModalRequest, isFetching } = this.props;


        return (
        <RegisterProductSelectorPresentation 
            openRegisterProductModalRequest={openRegisterProductModalRequest}
        /> 
        )
    }

}

function mapStateToProps(state) {
    const {isFetching} = state.registerProduct;
    return {
      isFetching
    };
  }
  
function mapDispatchToProps(dispatch) {
    const { openRegisterProductModalRequest } = CustomModalCreators;
    return {
      openRegisterProductModalRequest: function ({barcode}) {
        return dispatch(openRegisterProductModalRequest(barcode));
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterProductContainer);