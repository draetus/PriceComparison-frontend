import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchProductSelectorPresentation } from '../presentation';
import {Creators} from '../reduxSagas';

class SearchProductContainer extends Component {

    render() {
        const {data, searchProductRequest, clearData} = this.props;
        return (
        <SearchProductSelectorPresentation
        searchProductRequest={searchProductRequest}
        data={data}
        clearData={clearData}
        /> 
        );
    }

}

function mapStateToProps(state) {
    const {isFetching, data} = state.searchProduct;
    return {
      isFetching,
      data
    };
  }
  
function mapDispatchToProps(dispatch) {
    const { searchProductRequest, clearData } = Creators;
    return {
      searchProductRequest: function ({barCode}) {
        return dispatch(searchProductRequest(barCode));
      },
      clearData: function() {
        return dispatch(clearData());
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchProductContainer);