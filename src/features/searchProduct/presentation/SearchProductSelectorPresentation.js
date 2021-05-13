import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';
import SearchProductPresentation from './SearchProductPresentation';
import BarcodeSearchProductPresentation from './BarcodeSearchProductPresentation';
import { ProductDataPresentation } from '.';
import { StyleSheet, View } from 'react-native';

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
            <View style={styles.selectorGroup}>
                <View style={styles.selectorSubGroup}>
                    <ButtonContained style={styles.selectorButton} onPress={() => this.setState({ manualSearch: true, barcodeSearch: false })}> BUSCA MANUAL  </ ButtonContained>
                    <ButtonContained style={styles.selectorButton} onPress={() => this.setState({ manualSearch: false, barcodeSearch: true })}> BUSCA PELA CÂMERA  </ ButtonContained>
                </View>
            </View>
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

const styles = StyleSheet.create({
    selectorButton: {
        display: "flex",
        flexWrap: "wrap",
        width: "45%",
        borderColor: "#a10013",
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10
    },
    selectorGroup: {
        display: "flex",
    },
    selectorSubGroup: {
        display: "flex",
        flexDirection: "row"
    }
  });

export default SearchProductSelectorPresentation;