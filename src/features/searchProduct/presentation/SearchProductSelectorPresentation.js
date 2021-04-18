import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';
import SearchProductPresentation from './SearchProductPresentation';
import BarcodeSearchProductPresentation from './BarcodeSearchProductPresentation';
import { ProductDataPresentation } from '.';

class SearchProductSelectorPresentation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            manualSearch: false,
            barcodeSearch: false

        }
    }

    Selector = () => {
        return (
            <>
                <ButtonContained onPress={() => this.setState({ manualSearch: true, barcodeSearch: false })}> BUSCA MANUAL  </ ButtonContained>
                <ButtonContained onPress={() => this.setState({ manualSearch: false, barcodeSearch: true })}> BUSCA PELA CÂMERA  </ ButtonContained>
            </>
        )
    }

    SearchProductManual = () => {
        const {openSearchProductModalRequest} = this.props;
        return (
            <SearchProductPresentation 
                openSearchProductModalRequest={openSearchProductModalRequest}
            />
        )
    }

    SearchProductBarcode = () => {
        const {openSearchProductModalRequest} = this.props;
        return (
            <BarcodeSearchProductPresentation 
                openSearchProductModalRequest={openSearchProductModalRequest}
            />
        )
    }

    render() {
        const {manualSearch, barcodeSearch} = this.state;

        if (manualSearch) {
            return (
                <this.SearchProductManual />
            )
        } 

        if (barcodeSearch) {
            return (
                <this.SearchProductBarcode />
            )
        }

        return <this.Selector />
        
    }

}

export default SearchProductSelectorPresentation;