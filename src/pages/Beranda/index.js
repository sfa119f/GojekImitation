import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLOR_MAIN} from '../../utils/constant';
import {
  faArrowUp,
  faMagnifyingGlass,
  faPlus,
  faRocket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import {gopayMenu, mainMenu} from './menuBeranda';

const Gopay = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 8,
        marginVertical: 4,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesomeIcon icon={item.icon} size={14} color={'deepskyblue'} />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 16,
            marginLeft: 4,
          }}>
          {item.text}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
          fontSize: 16,
          marginVertical: 2,
        }}>
        {item.text == 'gopay coins' ? '' : 'Rp'}
        {item.ammount}
      </Text>
      <Text style={{color: COLOR_MAIN, fontSize: 10}}>{item.info}</Text>
    </TouchableOpacity>
  );
};

const MainMenu = ({item}) => {
  return (
    <TouchableOpacity style={{width: '25%', marginVertical: 4}}>
      <View
        style={{
          backgroundColor: item.bg_color,
          alignSelf: 'center',
          padding: 8,
          margin: 8,
          borderRadius: 24,
        }}>
        <FontAwesomeIcon icon={item.icon} size={24} color={'white'} />
      </View>
      <Text style={{color: 'black', alignSelf: 'center', fontSize: 12}}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

const Beranda = ({navigation}) => {
  const [gopay, setGopaymenu] = useState(gopayMenu);
  const [menuMain, setMainmenu] = useState(mainMenu);

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
      <ScrollView style={{paddingVertical: 16, paddingHorizontal: 12}}>
        <View style={styles.gopayMenu}>
          <View style={{width: '45%', height: 105}}>
            <ScrollView
              style={{paddingVertical: 8}}
              showsVerticalScrollIndicator={false}
              pagingEnabled
              bounces={false}>
              {gopay.map((el, idx) => (
                <Gopay item={el} key={idx} />
              ))}
              <View style={{height: 16}}></View>
            </ScrollView>
          </View>
          <View style={styles.gopayAction}>
            <TouchableOpacity>
              <View style={styles.gopayActionIcon}>
                <FontAwesomeIcon icon={faArrowUp} size={14} color="#2596be" />
              </View>
              <Text style={styles.gopayActionText}>Bayar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gopayActionIcon}>
                <FontAwesomeIcon icon={faPlus} size={14} color="#2596be" />
              </View>
              <Text style={styles.gopayActionText}>Isi Saldo</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gopayActionIcon}>
                <FontAwesomeIcon icon={faRocket} size={14} color="#2596be" />
              </View>
              <Text style={styles.gopayActionText}>Eksplor</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainMenu}>
          {menuMain.map((el, idx) => (
            <MainMenu item={el} key={idx} />
          ))}
          {/* <Text>COBABASJD askd kajs</Text> */}
        </View>
      </ScrollView>
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
  gopayMenu: {
    backgroundColor: '#2596be',
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  gopayAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    margin: 8,
    marginLeft: 16,
  },
  gopayActionIcon: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 6,
    height: 22,
    width: 22,
    alignSelf: 'center',
  },
  gopayActionText: {
    marginTop: 4,
    color: 'white',
    fontSize: 12,
  },
  mainMenu: {
    paddingTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
