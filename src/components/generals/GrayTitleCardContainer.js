import React from 'react';
import {View, StyleSheet} from 'react-native';
import Typography from '../strings/Typography';
import {withTheme, Divider} from 'react-native-paper';
import {Metrics} from '../../config';

class GrayTitleCardContainerComponent extends React.PureComponent {
  render() {
    const styles = createStyles(this.props);
    return (
      <View style={styles.container}>
        <Typography bottomMargin style={styles.title}>
          {this.props.title}
        </Typography>
        <Divider style={styles.divider} />
        {this.props.children}
      </View>
    );
  }
}

export default withTheme(GrayTitleCardContainerComponent);

function createStyles(props) {
  return StyleSheet.create({
    container: {
      backgroundColor: props.theme.colors.backgroundContrast,
      padding: Metrics.spacingMD,
      marginTop: Metrics.spacingMD,
    },
    title: {
      fontSize: Metrics.getSize(13),
      color: props.theme.colors.text,
      fontFamily: 'Bitter Bold',
      marginBottom: Metrics.spacingMD,
    },

    divider: {
      height: 1,
      backgroundColor: props.theme.colors.text,
    },
  });
}
