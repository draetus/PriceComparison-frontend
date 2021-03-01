import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Metrics} from '../../config';
import {withTheme} from 'react-native-paper';
import Typography from '../strings/Typography';
import ButtonContained from '../buttons/ButtonContained';

class InfoCardContainer extends React.Component {
  render() {
    const styles = createStyles(this.props);
    return (
      <View style={styles.container}>
        {this.props.title ? (
          <View style={styles.headerContainer}>
            <View style={styles.titlesContainer}>
              <Typography style={styles.title}>{this.props.title}</Typography>
              {this.props.subtitle ? (
                <Typography style={styles.subtitle}>
                  {this.props.subtitle}
                </Typography>
              ) : null}
            </View>
            {this.props.rightContent ? this.props.rightContent : null}
          </View>
        ) : null}
        {this.props.children ? this.props.children : null}
        {this.props.button ? (
          <ButtonContained {...this.props.button} style={styles.button} />
        ) : null}
      </View>
    );
  }
}

export default withTheme(InfoCardContainer);

function createStyles(props) {
  const {theme, titleStyle = {}, titleAlternative} = props;
  const {colors} = theme;
  return StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundContrast,
      padding: Metrics.spacingMD,
      marginTop: Metrics.spacingMD,
      overflow: 'hidden',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: props.children ? Metrics.spacingMD : 0,
    },
    titlesContainer: {
      flex: 1,
    },
    title: {
      fontFamily: titleAlternative ? 'Poppins Bold' : 'Bitter Bold',
      textTransform: titleAlternative ? 'uppercase' : null,
      fontSize: Metrics.getSize(14),
      color: titleAlternative ? colors.accent2 : colors.accent,
      ...titleStyle,
    },
    subtitle: {
      fontSize: Metrics.getSize(14),
      fontFamily: 'Bitter Bold',
    },
    button: {
      marginTop: Metrics.spacingMD,
    },
  });
}
