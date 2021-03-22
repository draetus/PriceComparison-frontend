import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '../../../components';
import { SearchProductPresentation } from '../presentation';
import {Creators} from '../reduxSagas';

class SearchProductContainer extends Component {

    render() {
        const {data, searchProductRequest} = this.props;
        console.log("SEARCH PRODUCT CONTAINER: ", this.props);
        return (
        <SearchProductPresentation
        searchProductRequest={searchProductRequest}
        data={data} 
        /> 
        );
    }

}

function mapStateToProps(state) {
    const {isFetching, data} = state.searchProduct;
    console.log("MAP STATE TO PROPS: ", state.searchProduct);
    return {
      isFetching,
      data
    };
  }
  
function mapDispatchToProps(dispatch) {
    const { searchProductRequest } = Creators;
    return {
      searchProductRequest: function ({barCode}) {
        return dispatch(searchProductRequest(barCode));
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchProductContainer);