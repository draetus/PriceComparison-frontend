import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {TouchableRipple, withTheme} from 'react-native-paper';
import {Typography} from '..';
import {Metrics} from '../../config';

function Tabs(props) {
  return (
    <View>
      <ScrollView horizontal contentContainerStyle={defaultStyles.container}>
        {props.items.map((item, index) => {
          const styles = createStyles({
            ...props,
            disabled: item.disabled,
            value: item.value,
            index,
          });
          return (
            <TouchableRipple
              key={index}
              onPress={item.disabled ? null : () => item.onPress(item.value)}
              style={styles.itemContainer}>
              <Typography style={styles.label}>{item.label}</Typography>
            </TouchableRipple>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default withTheme(React.memo(Tabs));

const defaultStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function createStyles({index, value, items, selected, theme, disabled}) {
  const {length} = items;
  const {colors} = theme;
  return StyleSheet.create({
    itemContainer: {
      paddingVertical: Metrics.spacingSM,
      marginLeft: index !== 0 ? Metrics.spacingSM : 0,
      marginRight: index !== length - 1 ? Metrics.spacingSM : 0,
      borderBottomColor: selected === value ? colors.accentContrast : null,
      borderBottomWidth: selected === value ? 2 : null,
      opacity: disabled ? 0.6 : 1,
    },
    label: {
      color: selected === value ? colors.accentContrast : colors.accent,
      fontFamily: 'Bitter Bold',
      fontSize: Metrics.getSize(14),
    },
  });
}
