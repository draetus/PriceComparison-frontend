import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';

class ManualRegister extends Component {

    constructor() {
        super();
        this.state = {
            query: ""
        }
    }

    render() {
        const { query } = this.state;
        const { openAddProductToShoppingListModalRequest, searchProductsRequest, id, products, clear } = this.props;
        return (
        <>
        <Typography> ADICIONAR A LISTA DE COMPRAS </Typography>
        <FormHolder
            onSubmit={(data) => {
                openAddProductToShoppingListModalRequest({barcode: data.barcode, id: id});
                clear();
            }}
        >
            <View style={styles.autocompleteContainer}>
                <Autocomplete 
                autoCapitalize="none"
                autoCorrect={false}
                data={products}
                value={query}
                listContainerStyle={styles.productList}
                onChangeText={(text) => { 
                    this.setState({query: text}); 
                    if (text != "") {
                        searchProductsRequest({name: text});
                    }
                }}
                placeholder={"DIGITE O NOME DO PRODUTO"}
                flatListProps={{
                    keyExtractor: (item) => {
                        return item.barcode;
                    },
                    renderItem: ({item}) => {
                        return (
                            <TouchableOpacity style={styles.product}
                            onPress={() => {
                                openAddProductToShoppingListModalRequest({barcode: item.barcode, id: id});
                            }}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                            );
                    }
                }}
                />
            </View>
        </FormHolder>
        </>
        )
    }

}


const styles = StyleSheet.create({
    autocompleteContainer: {
      flex: 1,
      left: 0,
      right: 0,
      top: 0,
      zIndex: 1
    },
    product: {
        margin: 2
    },
    productList: {
        maxHeight: 100
    }
  });

export default ManualRegister;