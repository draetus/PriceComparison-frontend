import React from 'react';
import {StyleSheet} from 'react-native';
import {Portal, Dialog, withTheme} from 'react-native-paper';
import {addProductToShoppingCartModal} from '../utils';
import {Metrics} from '../../config';
import { FormHolder } from '../../FormConfig';
import { SecondaryTitle, ButtonContained, Input, Typography } from '../../components';
import { connect } from 'react-redux';
import {Creators as ShoppingCartInProgressCreators} from '../../features/shoppingCartInProgress/reduxSagas';
import {Creators as ShoppingListCreators} from '../../features/shoppingList/reduxSagas';
import {Creators as RegisterProductCreators} from '../../features/registerProduct/reduxSagas';

class AddProductToShoppingCartModal extends React.Component {
  constructor(props) {
    super(props);
    this.boxRef = React.createRef(null);
  }
  state = {
    open: false,
    infos: {},
  };
  componentDidMount() {
    addProductToShoppingCartModal.setRef(this);
  }

  setInfos = (infos) => {
    this.setState((state) => ({
      infos: infos ? infos : state.infos,
      open: true,
    }));

    if (!infos && this.props.onCancel) {
      this.props.onCancel();
    }
  };

  closeModal = () => {
    this.setState({open: false});
  };

  AddProductToShoppingCartForm = () => {
    const {updateShoppingCart, addProductToShoppingListRequest} = this.props;
    const {barcode, productName, shoppingListId, shoppingCartProducts = [], shoppingListProducts = []} = this.state.infos;
    let existsInShoppingListProducts = false;
    let existsInShoppingCartProducts = false;

    for (i=0; i<shoppingListProducts.length; i++) {
      if (shoppingListProducts[i].barcode == barcode) {
        existsInShoppingListProducts = true;
      } 
    }

    for (i=0; i<shoppingCartProducts.length; i++) {
      if (shoppingCartProducts[i].barcode == barcode) {
        existsInShoppingCartProducts = true
      }
    }

    return (
      <>
      {
        existsInShoppingCartProducts
          ? 
          <>
            <SecondaryTitle titleType="TitleLineBottom">{" ESSE PRODUTO JA CONSTA NO CARRINHO, DESEJA MODIFICAR OS DADOS DO PRODUTO? "}</SecondaryTitle>
            <FormHolder
                onSubmit={(data) => {
                  for (i=0; i<shoppingCartProducts.length; i++) {
                    if (shoppingCartProducts[i].barcode == barcode) {
                      shoppingCartProducts[i] = {
                        name: productName,
                        barcode: barcode,
                        quantity: data.quantity
                      }
                    }
                  }
                  updateShoppingCart({
                    products: shoppingCartProducts
                  });
                  if (!existsInShoppingListProducts) {
                    addProductToShoppingListRequest({
                      id: shoppingListId,
                      barcode: barcode
                    })
                  }
                  this.closeModal();
                }}>
                <Input name="quantity" inputLabel="QUANTIDADE" />

                <ButtonContained type="submit"> ADICIONAR PRODUTO </ButtonContained>
              </FormHolder>
          </>
          : 
          <>
            <SecondaryTitle titleType="TitleLineBottom">{" DESEJA ADICIONAR O PRODUTO AO CARRINHO DE COMPRAS? "}</SecondaryTitle>
              <FormHolder
                onSubmit={(data) => {
                  shoppingCartProducts.push({
                    name: productName,
                    barcode: barcode,
                    quantity: data.quantity
                  })
                  updateShoppingCart({
                    products: shoppingCartProducts
                  });
                  if (!existsInShoppingListProducts) {
                    addProductToShoppingListRequest({
                      id: shoppingListId,
                      barcode: barcode
                    })
                  }
                  this.closeModal();
                }}>
                <Input name="quantity" inputLabel="QUANTIDADE" />

                <ButtonContained type="submit"> ADICIONAR PRODUTO </ButtonContained>

            </FormHolder>
          </>
      }
      </>
    )
  }

  RegisterProductForm = () => {
    const {addProductToShoppingListRequest} = this.props;
    const {barcode, id} = this.state.infos;

    return (
      <>
        <SecondaryTitle titleType="TitleLineBottom">{" ADICIONAR PRODUTO A LISTA DE COMPRAS "}</SecondaryTitle>
        <FormHolder 
          onSubmit={(data) => {
            addProductToShoppingListRequest({
              id: id,
              barcode: barcode
            });
            this.closeModal();
          }}
          >
            <ButtonContained type="submit"> ADICIONAR PRODUTO A LISTA DE COMPRAS </ButtonContained>

        </FormHolder>
      </>
    )
  }

  render() {
    const {exists} = this.state.infos;

    const {isFetching} = this.props;
    return (
      isFetching ? 
      (
        <Portal>
        <Dialog
          visible={this.state.open}
          style={styles.container}
          onDismiss={this.closeModal}>
            <SecondaryTitle titleType="TitleLineBottom">{" PESQUISANDO PRODUTO... "}</SecondaryTitle>
        </Dialog>
      </Portal>
      ) :
      <Portal>
        <Dialog
          visible={this.state.open}
          style={styles.container}
          onDismiss={this.closeModal}>
            {
              exists 
              ? <this.AddProductToShoppingCartForm /> 
              : <this.RegisterProductForm />
            }
        </Dialog>
      </Portal>
    );
  }
}

function mapStateToProps(state) {
  const {isFetchingAddProductToShoppingCartModal} = state.customModal;
  // const {products} = state.shoppingCart;
  return {
    isFetching: isFetchingAddProductToShoppingCartModal
    // products
  };
}

function mapDispatchToProps(dispatch) {
  const { updateShoppingCart } = ShoppingCartInProgressCreators;
  const { addProductToShoppingListRequest } = ShoppingListCreators;
  const { saveProductRequest } = RegisterProductCreators;
  return {
    updateShoppingCart: function({products}) {
      return dispatch(updateShoppingCart(products));
    },
    saveProductRequest: function ({name, barcode}) {
      return dispatch(saveProductRequest(name, barcode))
    },
    addProductToShoppingListRequest: function({id, barcode}) {
      return dispatch(addProductToShoppingListRequest(id, barcode));
    }
  };
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(AddProductToShoppingCartModal));

const styles = StyleSheet.create({
  container: {
    maxHeight: Metrics.screenHeight - Metrics.spacingXLG * 2,
    padding: Metrics.spacingMD,
    paddingBottom: 0,
  },
  scrollView: {
    flexGrow: 1,
  },
});
