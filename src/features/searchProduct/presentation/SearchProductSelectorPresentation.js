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
        const {searchProductRequest} = this.props;
        return (
            <SearchProductPresentation 
                searchProductRequest={searchProductRequest}
            />
        )
    }

    SearchProductBarcode = () => {
        const {searchProductRequest} = this.props;
        return (
            <BarcodeSearchProductPresentation 
                searchProductRequest={searchProductRequest}
            />
        )
    }

    ProductData = () => {
        const {data, clearData} = this.props;
        return (
            <ProductDataPresentation 
                data={data}
                clearData={clearData}
            />
        )
    }

    render() {
        const {manualSearch, barcodeSearch} = this.state;
        const {data} = this.props;

        if (data) {
            return (
                <this.ProductData />
            )
        }

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