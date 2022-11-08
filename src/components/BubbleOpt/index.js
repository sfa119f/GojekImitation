import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR_BD_GREY, COLOR_BG_GREY, COLOR_MAIN} from '../../utils/constant';

const BubbleOpt = ({title, listOpt}) => {
  return (
    <View>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.bubbleContainer}>
        {listOpt.map(element => (
          <TouchableOpacity>
            <View style={styles.bubbleOption}>
              <Text style={styles.bubbleText}>{element}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BubbleOpt;

const styles = StyleSheet.create({
  textTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  bubbleContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    flexWrap: 'wrap',
  },
  bubbleOption: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 14,
    marginVertical: 6,
    backgroundColor: COLOR_BG_GREY,
    borderWidth: 1,
    borderColor: COLOR_BD_GREY,
    borderRadius: 18,
  },
  bubbleText: {
    fontSize: 12,
    color: COLOR_MAIN,
  },
});
