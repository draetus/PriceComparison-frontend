import React, { Component } from 'react';
import { BarcodeScanner, ButtonContained, Input, Typography } from '../../../components';

class SearchProductPresentation extends Component {

    onBarCodeRead = (barcode) => {
        const { openSearchProductModalRequest } = this.props;
        openSearchProductModalRequest({barcode});
    }

    render() {
        return (
        <>
            <BarcodeScanner
            onBarCodeRead={this.onBarCodeRead} 
            />
        </>
        )
    }

}

export default SearchProductPresentation;