import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faMessage,
  faPercent,
  faRectangleList,
} from '@fortawesome/free-solid-svg-icons';
import {COLOR_MAIN, COLOR_DISABLE} from '../../utils/constant';
import React from 'react';

const TabItem = ({label, isFocused, onPress, onLongPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabItemContainer}>
      <FontAwesomeIcon
        icon={
          label === 'Promo'
            ? faPercent
            : label === 'Pesanan'
            ? faRectangleList
            : label === 'Chat'
            ? faMessage
            : faHouse
        }
        color={isFocused ? COLOR_MAIN : COLOR_DISABLE}
        size={20}
      />
      <Text style={styles.tabItemFont(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tabItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemFont: isFocused => ({
    color: isFocused ? COLOR_MAIN : COLOR_DISABLE,
    paddingTop: 4,
    fontSize: 12,
  }),
});
