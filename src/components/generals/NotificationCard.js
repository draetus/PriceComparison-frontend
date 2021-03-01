import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Typography} from '..';
import {
  Divider,
  TouchableRipple,
  IconButton,
  withTheme,
} from 'react-native-paper';
import {Metrics} from '../../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

class NotificationCard extends React.Component {
  RowContainer = ({children, styles}) => {
    return <View style={styles.rowContainer}>{children}</View>;
  };

  RowItem = ({children, styles}) => {
    return <Typography style={styles.rowItem}>{children}</Typography>;
  };
  render() {
    const {title, date, recipient} = this.props.notificationData;
    const styles = createStyles(this.props);
    return (
      <View>
        <Typography style={styles.title}>{this.props.title}</Typography>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Typography style={styles.cardTitle}>{title}</Typography>
            <IconButton
              style={styles.iconContainer}
              icon={() => (
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={Metrics.getSize(18)}
                  color={this.props.theme.colors.text}
                />
              )}
              onPress={() => {
                // TODO onPress
              }}
            />
          </View>
          <Divider style={styles.divider} />
          <this.RowContainer styles={styles}>
            <Typography style={styles.rowTitle}>
              Envio agendado para:
            </Typography>
            <this.RowItem styles={styles}>
              {moment(date).format('DD/MM/YYYY[ às ]HH:mm[ hrs]')}
            </this.RowItem>
          </this.RowContainer>
          <this.RowContainer styles={styles}>
            <Typography style={styles.rowTitle}>Destinatário:</Typography>
            <this.RowItem styles={styles}>{recipient}</this.RowItem>
          </this.RowContainer>
          <TouchableRipple
            style={styles.touchable}
            onPress={() => {
              // TODO onPress
            }}>
            <Typography>Ver mais</Typography>
          </TouchableRipple>
        </View>
      </View>
    );
  }
}

export default withTheme(NotificationCard);

function createStyles(props) {
  return StyleSheet.create({
    container: {
      backgroundColor: props.theme.colors.backgroundContrast,
      padding: Metrics.spacingMD,
    },
    title: {
      fontFamily: 'Poppins Bold',
      color: props.theme.colors.accent,
      marginTop: Metrics.spacingMD,
      marginBottom: Metrics.spacingSM,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardTitle: {
      fontWeight: 'bold',
      fontSize: Metrics.getSize(13),
    },
    iconContainer: {
      marginRight: -Metrics.spacingMD,
      marginVertical: -Metrics.spacingSM,
    },
    divider: {
      height: 1,
      marginVertical: Metrics.spacingSM,
      backgroundColor: props.theme.colors.text,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: Metrics.spacingSM,
    },
    rowTitle: {
      flex: 1,
      fontWeight: 'bold',
    },
    rowItem: {
      flex: 1,
      textAlign: 'right',
    },

    touchable: {
      alignSelf: 'flex-end',
      borderBottomWidth: 1,
    },
  });
}
