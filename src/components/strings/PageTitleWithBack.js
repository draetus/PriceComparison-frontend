import React from 'react';
import {View, StyleSheet} from 'react-native';
import PrimaryTitle from './PrimaryTitle';
import BackButton from '../buttons/BackButton';

class PageTitleWithBack extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.title !== this.props.title) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const styles = createStyle();
    return (
      <View style={styles.container}>
        <BackButton accentColor />
        <PrimaryTitle>{this.props.title}</PrimaryTitle>
      </View>
    );
  }
}

export default PageTitleWithBack;

function createStyle() {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
}
