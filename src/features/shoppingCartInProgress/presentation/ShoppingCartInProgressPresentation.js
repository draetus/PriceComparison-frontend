import React, { Component } from 'react';
import { ButtonContained, Typography } from '../../../components';

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
                </>
            )
        }

    ShoppingCartList = () => {
        const {products = []} = this.props;

        return (
            <>
            <Typography>CARRINHO DE COMPRAS</Typography>
            {
                products.map((item, index) => {
                    <Typography key = {item.barcode}>
                        {item.name}
                    </Typography>
                })
            }
            </>
        )


    }

    render() {

        const { id, name, clearShoppingCart } = this.props;

        return (
        <>
        <Typography>COMPRA EM PROGRESSO</Typography>
        <Typography>{id}</Typography>
        <Typography>{name}</Typography>
        <this.ProductList />
        <this.ShoppingCartList />
        <ButtonContained>BUSCA MANUAL</ButtonContained>
        <ButtonContained>BUSCA POR LEITOR DE CODIGO DE BARRAS</ButtonContained>
        </>
        )
    }

}
  
export default (ShoppingCartInProgressPresentation);