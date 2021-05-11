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
              console.log("BARCODE SERACH PRODUCT PRESENTATION LOCATION: ", location);
            openSearchProductModalRequest({
                lat: location.latitude,
                lon: location.longitude,
                barcode
            });
          })
          .catch(error => {
            console.log("BARCODE SERACH PRODUCT PRESENTATION LOCATION FAIL: ");
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