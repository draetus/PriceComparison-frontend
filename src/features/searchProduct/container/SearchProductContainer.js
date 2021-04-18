import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchProductSelectorPresentation } from '../presentation';
import {Creators as CustomModalCreators} from '../../../modals/reduxSagas';

class SearchProductContainer extends Component {

    render() {
        const {openSearchProductModalRequest} = this.props;
        return (
        <SearchProductSelectorPresentation
        openSearchProductModalRequest={openSearchProductModalRequest}
        /> 
        );
    }

}

function mapStateToProps(state) {
    const {isFetching} = state.searchProduct;
    return {
      isFetching
    };
  }
  
function mapDispatchToProps(dispatch) {
    const { openSearchProductModalRequest } = CustomModalCreators;
    return {
      openSearchProductModalRequest: function ({barcode}) {
        return dispatch(openSearchProductModalRequest(barcode));
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchProductContainer);