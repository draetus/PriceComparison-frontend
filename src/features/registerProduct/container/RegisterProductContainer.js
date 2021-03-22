import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterProductPresentation } from '../presentation';
import {Creators} from '../reduxSagas';

class RegisterProductContainer extends Component {

    render() {
        const { checkIfExistsRequest, exists, saveProductRequest } = this.props;


        return (
        <RegisterProductPresentation 
            checkIfExistsRequest={checkIfExistsRequest}
            exists={exists}
            saveProductRequest={saveProductRequest}
        /> 
        )
    }

}

function mapStateToProps(state) {
    const {isFetching, exists} = state.registerProduct;
    return {
      isFetching,
      exists
    };
  }
  
function mapDispatchToProps(dispatch) {
    const { checkIfExistsRequest, saveProductRequest } = Creators;
    return {
      checkIfExistsRequest: function ({barCode}) {
        return dispatch(checkIfExistsRequest(barCode));
      },
      saveProductRequest: function ({name, barCode}) {
        return dispatch(saveProductRequest(name, barCode))
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterProductContainer);