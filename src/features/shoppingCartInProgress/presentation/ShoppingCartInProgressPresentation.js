import React, { Component } from 'react';
import { ButtonContained, Typography } from '../../../components';
import ManualRegister from './ManualRegister';
import BarcodeRegister from './BarcodeRegister';

class ShoppingCartInProgressPresentation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            manualAdd: false,
            barcodeAdd: false

        }
    }

    clear() {
        this.setState({manualAdd: false, barcodeAdd: false});
    }

    Selector = () => {
        const {manualAdd, barcodeAdd} = this.state;
        const {id, products, shoppingListProducts, openAddProductToShoppingCartModalRequest} = this.props;
      
          if (manualAdd) {
              return (
                  <ManualRegister
                      openAddProductToShoppingCartModalRequest={openAddProductToShoppingCartModalRequest}
                      id={id}
                      products={products}
                      shoppingListProducts={shoppingListProducts}
                      clear = {() => this.clear()}
                  />
              )
          }
      
          if (barcodeAdd) {
              return (
                  <BarcodeRegister
                      openAddProductToShoppingCartModalRequest={openAddProductToShoppingCartModalRequest}
                      id={id}
                      products={products}
                      shoppingListProducts={shoppingListProducts}
                      clear = {() => this.clear()}
                  />
              )
          }
      
          
          return (
          <>
              <ButtonContained onPress={() => this.setState({ manualAdd: true, barcodeAdd: false })}> REGISTRO MANUAL  </ ButtonContained>
              <ButtonContained onPress={() => this.setState({ manualAdd: false, barcodeAdd: true })}> REGISTRO PELA CÂMERA  </ ButtonContained>
          </>
          );
              
      }

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
                products.map((item, index) => (
                    <Typography key = {item.barcode}>
                        {item.name}
                    </Typography>
                ))
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
        <this.Selector />
        </>
        )
    }

}
  
export default (ShoppingCartInProgressPresentation);