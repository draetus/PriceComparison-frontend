import React from 'react';
import {StyleSheet} from 'react-native';
import {Portal, Dialog, withTheme} from 'react-native-paper';
import {searchModal} from '../utils';
import {Metrics} from '../../config';
import { SecondaryTitle, ButtonContained, Input, Typography } from '../../components';
import { connect } from 'react-redux';

class SearchProductManual extends React.Component {
  constructor(props) {
    super(props);
    this.boxRef = React.createRef(null);
  }
  state = {
    open: false,
    infos: {},
  };
  componentDidMount() {
    searchModal.setRef(this);
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

  render() {
    const {barcode, name} = this.state.infos;

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
            <Typography>{"NOME DO PRODUTO: " + name}</Typography>
            <Typography>{"CÓDIGO DE BARRAS: " + barcode}</Typography>
        </Dialog>
      </Portal>
    );
  }
}

function mapStateToProps(state) {
  const {isFetchingSearchModal} = state.customModal;
  return {
    isFetching: isFetchingSearchModal
  };
}

export default withTheme(connect(mapStateToProps)(SearchProductManual));

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
