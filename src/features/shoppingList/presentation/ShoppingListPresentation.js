import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonContained, Typography } from '../../../components';
import {registerShoppingListModal} from '../../../modals/utils';
import {Navigation} from "../../../navigation"

class ShoppingListPresentation extends Component {

    ShoppingList = () => {
        const {shoppinglists = [], searchShoppingListProductsRequest} = this.props;
        return (
            shoppinglists.map((item, index) => (
                <ButtonContained 
                style={styles.listButton}
                onPress={() => {
                    searchShoppingListProductsRequest({id: item.id})
                    Navigation.toShoppingListDetails(item);
                }}
                key = {item.id}> {item.name} </ButtonContained>
            ))
        )
    }

    render() {
        return (
        <>
            <this.ShoppingList />

            <ButtonContained 
            style={styles.listButton}
            onPress={() => {
                registerShoppingListModal.setInfos();
            }}> CRIAR NOVA LISTA </ButtonContained>
        </>
        )
    }

}

const styles = StyleSheet.create({
    listButton: {
        display: "flex",
        flexWrap: "wrap",
        borderColor: "#a10013",
        borderWidth: 2,
        marginLeft: 50,
        marginRight: 50
    }
  });

export default ShoppingListPresentation;