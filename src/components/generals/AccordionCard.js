import React from 'react';
import {withTheme, TouchableRipple} from 'react-native-paper';
import {View, StyleSheet, LayoutAnimation} from 'react-native';
import Typography from '../strings/Typography';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Metrics} from '../../config';

class WorkData extends React.Component {
  state = {
    showContent: false,
  };
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  toggleView = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState((state) => ({showContent: !state.showContent}));
  };

  render() {
    const styles = createStyles(this.props);
    return (
      <View style={styles.container}>
        <TouchableRipple
          style={styles.headerContainer}
          onPress={this.toggleView}>
          <>
            <View style={styles.titlesContainer}>
              <Typography style={styles.title}>{this.props.title}</Typography>
              {this.props.subtitle ? (
                <Typography style={styles.subtitle}>
                  {this.props.subtitle}
                </Typography>
              ) : null}
            </View>
            <MaterialCommunityIcons
              color={this.props.theme.colors.text}
              name={this.state.showContent ? 'chevron-up' : 'chevron-down'}
              size={Metrics.getSize(20)}
            />
          </>
        </TouchableRipple>
        {this.state.showContent ? (
          <View style={styles.contentContainer}>{this.props.children}</View>
        ) : null}
      </View>
    );
  }
}

export default withTheme(WorkData);

function createStyles(props) {
  return StyleSheet.create({
    container: {
      backgroundColor: props.theme.colors.backgroundContrast,
      marginTop: Metrics.spacingMD,
      overflow: 'hidden',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: Metrics.spacingMD,
    },
    contentContainer: {
      padding: Metrics.spacingMD,
      paddingTop: 0,
    },
    titlesContainer: {
      flex: 1,
    },
    title: {
      fontSize: Metrics.getSize(13),
      color: props.theme.colors.accent2,
      fontFamily: 'Poppins Bold',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontSize: Metrics.getSize(15),
      fontFamily: 'Bitter Bold',
    },
  });
}
