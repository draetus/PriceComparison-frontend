import React, { Component } from 'react';
import { Typography } from '../../../components';

class ShoppingCartInProgressPresentation extends Component {

    ProductList = () => {
        const {shoppingListProducts = []} = this.props;

            return (
                <>
                <Typography>LISTA DE COMPRAS</Typography>
                {shoppingListProducts.map((item, index) => (
                    <Typography key = {item.barcode} >
                         {item.name} 
                    </Typography>
                ))}
                <Typography>CARRINHO DE COMPRAS</Typography>
                </>
            )
        }

    render() {

        const { id, name } = this.props;

        return (
        <>
        <Typography>COMPRA EM PROGRESSO</Typography>
        <Typography>{id}</Typography>
        <Typography>{name}</Typography>
        <this.ProductList />
        </>
        )
    }

}
  
export default (ShoppingCartInProgressPresentation);