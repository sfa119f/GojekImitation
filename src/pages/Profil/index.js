import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  faArrowLeft,
  faPen,
  faAngleRight,
  faCube,
} from '@fortawesome/free-solid-svg-icons';
import {UserImg} from '../../assets';
import {AccountMenu, InfoMenu} from './listMenu';

const MenuComponent = (title, list) => {
  return (
    <View>
      <Text style={styles.titleMenu}>{title}</Text>
      {list.map(el => (
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgba(225,0,0,0)',
            }}>
            <FontAwesomeIcon
              icon={el.icon}
              size={20}
              style={{marginLeft: 16}}
            />
            <View
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: 'rgba(75, 75, 75, 0.2)',
                flexDirection: 'row',
                marginLeft: 12,
                paddingVertical: 16,
                alignItems: 'center',
              }}>
              <Text style={{flex: 1, color: 'black'}}>{el.text}</Text>
              <Text style={{fontSize: 12}}>{el.info}</Text>
              {el.isSwitch ? (
                <Switch
                  trackColor={{true: '#add5cd', false: '#aaa'}}
                  thumbColor={el.value ? '#208162' : '#eee'}
                  ios_backgroundColor="#3e3e3e"
                  value={el.value}
                  disabled
                />
              ) : (
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{paddingHorizontal: 20}}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Profil = ({navigation}) => {
  const [profil, setProfil] = useState({
    name: 'Example',
    telp: '+6281234567890',
    email: 'example@email.com',
    goclub: 'Bos',
  });
  const [listAccMenu, setListAccMenu] = useState(AccountMenu);
  const [listInfoMenu, setListInfoMenu] = useState(InfoMenu);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <TouchableHighlight
          underlayColor={'rgba(75, 75, 75, 0.2)'}
          style={{margin: 4, borderRadius: 16}}
          onPress={() => {
            navigation.navigate('MainApp');
          }}>
          <FontAwesomeIcon icon={faArrowLeft} size={16} color={'black'} />
        </TouchableHighlight>
        <Text style={styles.textHeader}>Profilku</Text>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 16,
            marginVertical: 16,
          }}>
          <Image
            source={UserImg}
            style={{width: 28, height: 28, borderRadius: 24, marginTop: 4}}
          />
          <View style={{flex: 1, marginHorizontal: 16}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {profil.name}
            </Text>
            <Text style={{color: 'black'}}>{profil.telp}</Text>
            <Text style={{color: 'black'}}>{profil.email}</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#111',
                  padding: 4,
                  borderRadius: 16,
                }}>
                <View
                  style={{
                    backgroundColor: 'moccasin',
                    padding: 4,
                    borderRadius: 12,
                  }}>
                  <FontAwesomeIcon
                    icon={faCube}
                    size={16}
                    color={'darkorange'}
                  />
                </View>
                <Text style={{fontSize: 12, color: 'white', margin: 4}}>
                  {profil.goclub}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faPen}
              size={20}
              style={{paddingLeft: 8, marginTop: 6}}
            />
          </TouchableOpacity>
        </View>
        {MenuComponent('Akun', listAccMenu)}
        {MenuComponent('Info Lainnya', listInfoMenu)}
      </ScrollView>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 12,
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 16,
    color: 'black',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  titleMenu: {
    color: 'black',
    fontSize: 12,
    marginTop: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
