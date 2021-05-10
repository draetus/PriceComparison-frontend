import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonContained } from '../../../components';
import { Navigation } from "../../../navigation";
import {api} from '../../../services';

class HomePresentation extends Component {

    render() {
        const {globalLogout} = this.props;
        return (
        <>
        <View style={styles.homeGroup}>
            <View style={styles.homeSubGroup} >
                <ButtonContained icon="basket" style={styles.homeButton} onPress={Navigation.toShoppingList}> LISTAS DE COMPRAS </ButtonContained>
                <ButtonContained icon="registered-trademark" style={styles.homeButton} onPress={Navigation.toRegisterProduct}> REGISTRAR PRODUTO </ButtonContained>
            </View>
            <View style={styles.homeSubGroup} >
                <ButtonContained icon="magnify" style={styles.homeButton} onPress={Navigation.toSearchProduct}> PESQUISAR PRODUTO </ButtonContained>
                <ButtonContained icon="cart-outline" style={styles.homeButton} onPress={Navigation.toShoppingCart}> CARRINHO DE COMPRAS </ButtonContained>
            </View>
            <View style={styles.homeSubGroup} >
                <ButtonContained disabled={true} style={styles.homeButton} > EDIÇÃO DE PERFIL - EM BREVE </ButtonContained>
                <ButtonContained disabled={true} style={styles.homeButton} > CONFIGURAÇÕES - EM BREVE </ButtonContained>
            </View>
            <ButtonContained style={styles.exitButton} onPress={globalLogout} > SAIR </ButtonContained>
        </View>
        </>
        )
    }

}

const styles = StyleSheet.create({
    homeButton: {
      display: "flex",
      flexWrap: "wrap",
        width: "50%",
        height: 150,
        borderColor: "#a10013",
        borderWidth: 2
    },
    exitButton: {
      display: "flex",
      flexWrap: "wrap",
      height: 150,
      borderColor: "#a10013",
      borderWidth: 2,
    },
    homeGroup: {
        display: "flex",
    },
    homeSubGroup: {
        display: "flex",
        flexDirection: "row"
    }
  });

export default HomePresentation;