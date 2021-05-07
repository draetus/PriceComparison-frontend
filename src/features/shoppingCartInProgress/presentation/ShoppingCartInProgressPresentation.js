import React, { Component } from 'react';
import { ButtonContained, Typography } from '../../../components';
import ManualRegister from './ManualRegister';
import BarcodeRegister from './BarcodeRegister';
import { Avatar, Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';

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
        const {shoppingListProducts = [], products = []} = this.props;

        return (
            <ScrollView style={styles.productList}>
            {
                shoppingListProducts.map((item, index) => {

                    let selectedProduct = null;

                    for (let i=0; i<products.length; i++) {
                        if (products[i].barcode == item.barcode) {
                            selectedProduct = products[i];
                        }
                    }
                    
                    return (
                        selectedProduct != null && selectedProduct.quantity >= item.quantity 
                    ?
                        <Card.Title
                            style={styles.productChecked}
                            title={item.name}
                            subtitle={"QTD: " + (selectedProduct ? selectedProduct.quantity : "0") + "/" + item.quantity}
                            left={(props) => <Avatar.Icon {...props} icon="shopping" />}
                            right={(props) => (<Avatar.Icon {...props} icon="check" />)}
                        />
                    :
                        <Card.Title
                            style={styles.productNotChecked}
                            title={item.name}
                            subtitle={"QTD: " + (selectedProduct ? selectedProduct.quantity : "0") + "/" + item.quantity}
                            left={(props) => <Avatar.Icon {...props} icon="shopping" />}
                            right={(props) => (<Avatar.Icon {...props} icon="window-close" />)}
                        />
                );
            })
            }
            </ScrollView>
        )


    }

    render() {

        const { name, clearShoppingCart } = this.props;
        const {manualAdd, barcodeAdd} = this.state;

        if (manualAdd || barcodeAdd) {
            return (<this.Selector />);
        }

        return (
        <>
        <View>
            <Card.Title titleStyle={styles.title} title={name}/>
        </View>
        <this.ShoppingCartList />
        <this.Selector />
        </>
        )
    }

}

const styles = StyleSheet.create({
    productList: {
      flex: 5,
      maxHeight: 300
    },
    productChecked: {
        backgroundColor: "#09ec74" // GREEN
    },
    productNotChecked: {
        backgroundColor: "#ff4343" // RED
    },
    title: {
        textAlign: "center"
    }
  });
  
export default (ShoppingCartInProgressPresentation);