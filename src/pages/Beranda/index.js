import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLOR_MAIN} from '../../utils/constant';
import {faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Beranda = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
          <View style={styles.searchBox}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size={16}
              style={styles.iconSearch}
            />
            <Text style={styles.inputSearch}>
              Cari layanan, makanan, & tujuan
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Profil')}>
          <View style={styles.account}>
            <FontAwesomeIcon icon={faUser} size={16} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLOR_MAIN,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 22,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  iconSearch: {
    paddingVertical: 22,
    marginRight: 8,
  },
  inputSearch: {
    flex: 1,
    fontSize: 12,
    paddingVertical: 12,
    borderColor: 'black',
  },
  account: {
    backgroundColor: 'white',
    borderRadius: 21,
    padding: 12,
    margin: 2,
  },
});
