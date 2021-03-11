import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonContained } from '../../../components';
import { Navigation } from "../../../navigation";

class HomePresentation extends Component {

    render() {
        console.log("HOME PRESENTATION:", Navigation);
        return (
        <>
        <ButtonContained> LISTA DE COMPRAS </ButtonContained>
        <ButtonContained onPress={Navigation.toRegisterProduct}> REGISTRAR PRODUTO </ButtonContained>
        <ButtonContained onPress={Navigation.toSearchProduct}> PESQUISAR PRODUTO </ButtonContained>
        <ButtonContained> CARRINHO DE COMPRAS </ButtonContained>
        <ButtonContained> EDIÇÃO DE PERFIL </ButtonContained>
        <ButtonContained> CONFIGURAÇÕES </ButtonContained>
        <ButtonContained> SAIR </ButtonContained>
        </>
        )
    }

}

export default HomePresentation;