import React from 'react';
import {StyleSheet} from 'react-native';
import {Portal, Dialog, withTheme} from 'react-native-paper';
import {customModal} from '../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {Metrics} from '../../config';
import {SecondaryTitle, ButtonText, Typography} from '../../components';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.boxRef = React.createRef(null);
  }
  state = {
    open: false,
    infos: {},
  };
  componentDidMount() {
    customModal.setRef(this);
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
    const {texts = [], title, btnRight, btnLeft} = this.state.infos;
    return (
      <Portal>
        <Dialog
          visible={this.state.open}
          style={styles.container}
          onDismiss={this.closeModal}>
          <SecondaryTitle titleType="TitleLineBottom">{title}</SecondaryTitle>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{
              paddingVertical: Metrics.spacingMD,
            }}>
            {texts.map((text) => (
              <Typography key={text}>{text}</Typography>
            ))}
          </ScrollView>
          <Dialog.Actions>
            {btnLeft ? (
              <ButtonText onPress={btnLeft.onPress}>{btnLeft.label}</ButtonText>
            ) : null}
            {btnRight ? (
              <ButtonText onPress={btnRight.onPress}>
                {btnRight.label}
              </ButtonText>
            ) : null}
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

export default withTheme(ModalContainer);

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
