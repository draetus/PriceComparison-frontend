import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {Metrics} from '../../config';
import {TouchableRipple, withTheme} from 'react-native-paper';
import {Typography} from '..';

function HorizontalNavigation({items, theme}) {
  const styles = createStyles(theme);
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {items.map((item, index) => (
          <TouchableRipple
            key={index}
            style={createItemStyle(theme, index, items).itemContainer}
            onPress={item.onPress}>
            <>
              <Typography style={styles.itemNumber}>{index + 1}</Typography>

              <Typography style={styles.itemName}>{item.label}</Typography>
            </>
          </TouchableRipple>
        ))}
      </ScrollView>
    </View>
  );
}

export default withTheme(HorizontalNavigation);

function createStyles(theme) {
  const {colors} = theme;
  const textColor = colors.buttonText;
  return StyleSheet.create({
    container: {
      marginHorizontal: -Metrics.spacingLG,
    },
    contentContainer: {
      paddingHorizontal: Metrics.spacingLG,
      paddingVertical: Metrics.spacingMD,
    },

    itemContainer: {
      backgroundColor: colors.accent,
      padding: Metrics.spacingMD,
      width: Metrics.getSize(120),
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'left',
      overflow: 'hidden',
      borderRadius: 4,
    },

    itemNumber: {
      color: textColor,
      fontSize: Metrics.getSize(22),
      fontFamily: 'Poppins Bold',
      marginRight: Metrics.spacingMD,
    },

    itemName: {
      fontSize: Metrics.getSize(12),
      flex: 1,
      color: textColor,
    },
  });
}

function createItemStyle(theme, index, items) {
  const {colors} = theme;
  return StyleSheet.create({
    itemContainer: {
      backgroundColor: colors.accent,
      padding: Metrics.spacingMD,
      width: Metrics.getSize(120),
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'left',
      overflow: 'hidden',
      borderRadius: 4,
      marginLeft: index !== 0 ? Metrics.spacingMinimun : 0,
      marginRight: index !== items.length - 1 ? Metrics.spacingMinimun : 0,
    },
  });
}
