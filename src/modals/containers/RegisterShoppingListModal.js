import React from 'react';
import {StyleSheet} from 'react-native';
import {Portal, Dialog, withTheme} from 'react-native-paper';
import {registerShoppingListModal} from '../utils';
import {Metrics} from '../../config';
import { FormHolder } from '../../FormConfig';
import { SecondaryTitle, ButtonContained, Input } from '../../components';
import { connect } from 'react-redux';
import {Creators as ShoppingListCreators} from '../../features/shoppingList/reduxSagas';

class RegisterShoppingListModal extends React.Component {
  constructor(props) {
    super(props);
    this.boxRef = React.createRef(null);
  }
  state = {
    open: false,
    infos: {},
  };
  componentDidMount() {
    registerShoppingListModal.setRef(this);
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

  RegisterShoppingListForm = () => {
    const {createShoppingListsRequest} = this.props;

    return (
      <>
        <SecondaryTitle titleType="TitleLineBottom">{" INFORME O NOME DA NOVA LISTA DE COMPRAS "}</SecondaryTitle>
        <FormHolder 
          onSubmit={(data) => {
            createShoppingListsRequest(data);
            this.closeModal();
          }}
          >

            <Input name="name" inputLabel="INFORME O NOME DA LISTA DE COMPRAS" />

            <ButtonContained style={styles.selectorButton} type="submit"> ENVIAR </ButtonContained>

        </FormHolder>
      </>
    )
  }

  render() {
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
            <this.RegisterShoppingListForm />
        </Dialog>
      </Portal>
    );
  }
}

function mapStateToProps(state) {
  const {isFetchingCreateShoppingList} = state.shoppingList;
  return {
    isFetching: isFetchingCreateShoppingList
  };
}

function mapDispatchToProps(dispatch) {
  const { createShoppingListsRequest } = ShoppingListCreators;
  return {
    createShoppingListsRequest: function ({name}) {
      return dispatch(createShoppingListsRequest(name))
    }
  };
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(RegisterShoppingListModal));

const styles = StyleSheet.create({
  container: {
    maxHeight: Metrics.screenHeight - Metrics.spacingXLG * 2,
    padding: Metrics.spacingMD,
    paddingBottom: 0,
  },
  scrollView: {
    flexGrow: 1,
  },
  selectorButton: {
    display: "flex",
    flexWrap: "wrap",
    borderColor: "#a10013",
    borderWidth: 2,
    marginLeft: 50,
    marginRight: 50
  },
});
