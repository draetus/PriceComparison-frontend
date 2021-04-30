import React from 'react';
import {StyleSheet} from 'react-native';
import {Portal, Dialog, withTheme} from 'react-native-paper';
import {addProductToShoppingCartModal} from '../utils';
import {Metrics} from '../../config';
import { FormHolder } from '../../FormConfig';
import { SecondaryTitle, ButtonContained, Input, Typography } from '../../components';
import { connect } from 'react-redux';
import {Creators as ShoppingCartCreators} from '../../features/shoppingCartInProgress/reduxSagas';
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

  AddProductToShoppingListForm = () => {
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

  RegisterProductForm = () => {
    const {saveProductRequest} = this.props;
    const {barcode} = this.state.infos;
    return (
      <>
        <SecondaryTitle titleType="TitleLineBottom">{" O PRODUTO NÃO EXISTE - FAVOR REGISTRAR PRODUTO "}</SecondaryTitle>
        <FormHolder
          onSubmit={(data) => {
            saveProductRequest({
              name: data.name,
              barcode: barcode
            });
            this.closeModal();
          }}>
            <Input name="name" inputLabel="NOME DO PRODUTO" />

            <ButtonContained type="submit"> ENVIAR </ButtonContained>

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
              exists ? <this.AddProductToShoppingListForm /> : <this.RegisterProductForm />
            }
        </Dialog>
      </Portal>
    );
  }
}

function mapStateToProps(state) {
  const {isFetchingAddProductToShoppingCartModal} = state.customModal;
  const {products} = state.shoppingCart;
  return {
    isFetching: isFetchingAddProductToShoppingCartModal,
    products
  };
}

function mapDispatchToProps(dispatch) {
  const { updateShoppingCart } = ShoppingCartCreators;
  const { saveProductRequest } = RegisterProductCreators;
  return {
    updateShoppingCart: function({products}) {
      return dispatch(updateShoppingCart(products));
    },
    saveProductRequest: function ({name, barcode}) {
      return dispatch(saveProductRequest(name, barcode))
    },
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
