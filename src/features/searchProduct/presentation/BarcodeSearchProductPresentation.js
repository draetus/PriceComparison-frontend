import React, { Component } from 'react';
import { BarcodeScanner, ButtonContained, Input, Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';

class SearchProductPresentation extends Component {

    render() {
        const {searchProductRequest} = this.props;
        return (
        <>
            <BarcodeScanner />
        </>
        )
    }

}

export default SearchProductPresentation;