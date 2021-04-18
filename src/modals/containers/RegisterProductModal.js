import React from 'react';
import {StyleSheet} from 'react-native';
import {Portal, Dialog, withTheme} from 'react-native-paper';
import {registerModal} from '../utils';
import {Metrics} from '../../config';
import { FormHolder } from '../../FormConfig';
import { SecondaryTitle, ButtonContained, Input } from '../../components';
import { connect } from 'react-redux';
import {Creators as RegisterProductCreators} from '../../features/registerProduct/reduxSagas';

class RegisterProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.boxRef = React.createRef(null);
  }
  state = {
    open: false,
    infos: {},
  };
  componentDidMount() {
    registerModal.setRef(this);
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

  AddPriceForm = () => {
    const {savePriceProductRequest} = this.props;
    const {barcode} = this.state.infos;

    return (
      <>
        <SecondaryTitle titleType="TitleLineBottom">{" INFORME O PREÇO DO PRODUTO "}</SecondaryTitle>
        <FormHolder 
          onSubmit={(data) => {
            savePriceProductRequest({
              price: data.price,
              barcode: barcode,
              latitude: 0,
              longitude: 0
            });
            this.closeModal();
          }}
          >

            <Input name="price" inputLabel="PREÇO DO PRODUTO" />

            <ButtonContained type="submit"> ENVIAR </ButtonContained>

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
              exists ? <this.AddPriceForm /> : <this.RegisterProductForm />
            }
        </Dialog>
      </Portal>
    );
  }
}

function mapStateToProps(state) {
  const {isFetchingRegisterModal} = state.customModal;
  return {
    isFetching: isFetchingRegisterModal
  };
}

function mapDispatchToProps(dispatch) {
  const { saveProductRequest, savePriceProductRequest } = RegisterProductCreators;
  return {
    saveProductRequest: function ({name, barcode}) {
      return dispatch(saveProductRequest(name, barcode))
    },
    savePriceProductRequest: function ({price, barcode, latitude, longitude}) {
      return dispatch(savePriceProductRequest(price, barcode, latitude, longitude))
    },
  };
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(RegisterProductModal));

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
