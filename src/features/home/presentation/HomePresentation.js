import React, { Component } from 'react';
import { ButtonContained } from '../../../components';
import { Navigation } from "../../../navigation";

class HomePresentation extends Component {

    render() {
        return (
        <>
        <ButtonContained onPress={Navigation.toShoppingList}> LISTAS DE COMPRAS </ButtonContained>
        <ButtonContained onPress={Navigation.toRegisterProduct}> REGISTRAR PRODUTO </ButtonContained>
        <ButtonContained onPress={Navigation.toSearchProduct}> PESQUISAR PRODUTO </ButtonContained>
        <ButtonContained onPress={Navigation.toShoppingCart}> CARRINHO DE COMPRAS </ButtonContained>
        <ButtonContained> EDIÇÃO DE PERFIL </ButtonContained>
        <ButtonContained> CONFIGURAÇÕES </ButtonContained>
        <ButtonContained> SAIR </ButtonContained>
        </>
        )
    }

}

export default HomePresentation;