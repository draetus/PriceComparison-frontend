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
        const {id, products, shoppingListProducts, noShoppingList, openAddProductToShoppingCartModalRequest} = this.props;
      
          if (manualAdd) {
              return (
                  <ManualRegister
                      openAddProductToShoppingCartModalRequest={openAddProductToShoppingCartModalRequest}
                      id={id}
                      products={products}
                      shoppingListProducts={shoppingListProducts}
                      noShoppingList={noShoppingList}
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
                      noShoppingList={noShoppingList}
                      clear = {() => this.clear()}
                  />
              )
          }
      
          
          return (
            <View style={styles.selectorGroup}>
                <View style={styles.selectorSubGroup}>
                    <ButtonContained style={styles.selectorButton} onPress={() => this.setState({ manualAdd: true, barcodeAdd: false })}> REGISTRO MANUAL  </ ButtonContained>
                    <ButtonContained style={styles.selectorButton} onPress={() => this.setState({ manualAdd: false, barcodeAdd: true })}> REGISTRO PELA CÂMERA  </ ButtonContained>
                </View >
            </View>
          );
              
      }

    ShoppingCartList = () => {
        let {shoppingListProducts = []} = this.props;
        const {noShoppingList, products = []} = this.props;

        if (noShoppingList) {
            shoppingListProducts = products;
        }

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

        const { name, clearShoppingCart, noShoppingList } = this.props;
        const {manualAdd, barcodeAdd} = this.state;

        if (manualAdd || barcodeAdd) {
            return (<this.Selector />);
        }

        return (
        <>
        <Card.Title titleStyle={styles.title} title={name}/>
        <this.ShoppingCartList />
        <this.Selector />
        <ButtonContained style={styles.selectorLargeButton} onPress={clearShoppingCart}> LIMPAR CARRINHO DE COMPRAS </ButtonContained>
        </>
        )
    }

}

const styles = StyleSheet.create({
    productList: {
      flex: 1
    },
    productChecked: {
        backgroundColor: "#09ec74" // GREEN
    },
    productNotChecked: {
        // backgroundColor: "#ff4343" // RED
        color: "#ff4343"
    },
    title: {
        textAlign: "center"
    },
    selectorButton: {
        display: "flex",
        flexWrap: "wrap",
        width: "45%",
        borderColor: "#a10013",
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10
    },
    selectorLargeButton: {
        display: "flex",
        flexWrap: "wrap",
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
  
export default (ShoppingCartInProgressPresentation);