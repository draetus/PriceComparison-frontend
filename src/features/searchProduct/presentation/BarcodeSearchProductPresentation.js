import React, { Component } from 'react';
import GetLocation from 'react-native-get-location';
import { BarcodeScanner, ButtonContained, Input, Typography } from '../../../components';

class SearchProductPresentation extends Component {

    onBarCodeRead = (barcode) => {
        const { openSearchProductModalRequest } = this.props;
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
          })
          .then(location => {
            openSearchProductModalRequest({
                lat: location.latitude,
                lon: location.longitude,
                barcode
            });
          })
          .catch(error => {
              const { code, message } = error;
              console.warn(code, message);
          })
    }

    render() {
        return (
        <>
            <BarcodeScanner
            onBarCodeRead={null} 
            />
        </>
        )
    }

}

export default SearchProductPresentation;