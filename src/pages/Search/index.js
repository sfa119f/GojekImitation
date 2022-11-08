import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  faArrowLeft,
  faAngleDown,
  faMagnifyingGlass,
  faUtensils,
  faLocationDot,
  faBasketShopping,
  faCircleQuestion,
  faBellConcierge,
  faFileInvoiceDollar,
  faMotorcycle,
  faCar,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  COLOR_BD_GREY,
  COLOR_BG_GREY,
  COLOR_MAIN,
  COLOR_MAIN_LIGHT,
} from '../../utils/constant';
import {BubbleOpt} from '../../components';

const Search = ({navigation}) => {
  const [address, setAddress] = useState({
    title: 'Jl. example, dimana kau berada',
    detail: 'Jl. example, dimana kau berada',
  });
  const [recentSearch, setRecentSearch] = useState([
    'mcd',
    'takoyaki',
    'gedung sate',
  ]);
  const [popularSearch, setPopularSearch] = useState([
    'pizza hut',
    'kfc',
    'salad',
    'bakso',
    'nasi goreng',
    'kebab',
    'mcd',
    'soto',
  ]);
  const [shortcut, setShortcut] = useState([
    {
      type: 'ride',
      titleAddres: 'Alfamart BKG',
      detailAddress: 'Jl. Abcdef, sadsa, dasd, iwhwb',
      distance: 1.5,
    },
    {
      type: 'car',
      titleAddres: 'Kampus Merdeka',
      detailAddress: 'Jl. VAsjhvd, uwsadavskd, dasdvaisv, avisdxivq, svahvhdas',
      distance: 6,
    },
    {
      type: 'ride',
      titleAddres: 'Jl. example, dimana kau berada',
      detailAddress: 'Jl. example, dimana kau berada',
      distance: 0,
    },
  ]);

  const categorySearch = [
    {name: 'Restoran', icon: faUtensils, color: 'orangered', link: ''},
    {name: 'Tujuan', icon: faLocationDot, color: COLOR_MAIN, link: ''},
    {name: 'Belanja', icon: faBasketShopping, color: 'orangered', link: ''},
    {name: 'Layanan', icon: faBellConcierge, color: COLOR_MAIN_LIGHT, link: ''},
    {
      name: 'Tagihan',
      icon: faFileInvoiceDollar,
      color: 'deepskyblue',
      link: '',
    },
    {name: 'Lainnya', icon: faCircleQuestion, color: 'darkslategrey', link: ''},
  ];

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
        <TouchableOpacity style={{marginLeft: 8, flex: 1}}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text numberOfLines={1} style={styles.textHeader}>
                {address.title}
              </Text>
              <FontAwesomeIcon
                icon={faAngleDown}
                size={12}
                color={COLOR_MAIN}
              />
            </View>
            <Text style={{fontSize: 10}}>{address.detail}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 16, marginVertical: 8}}>
          <View style={styles.searchBox}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size={16}
              style={{paddingVertical: 22, marginRight: 8}}
            />
            <TextInput
              placeholder="Cari layanan, makanan, & tujuan"
              style={{flex: 1, fontSize: 12, padding: 0}}
            />
          </View>
        </View>
        <View style={{marginHorizontal: 16, marginVertical: 4}}>
          <BubbleOpt title={'Pernah kamu cari'} listOpt={recentSearch} />
        </View>
        <View style={{marginVertical: 4}}>
          <Text style={[styles.textTitle, {marginHorizontal: 16}]}>
            Kategori pencarian
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.buttonCategoryContainer}>
            {categorySearch.map((el, idx) =>
              idx % 2 != 1 ? (
                <View>
                  <TouchableOpacity>
                    <View style={styles.buttonCategory}>
                      <FontAwesomeIcon
                        icon={el.icon}
                        size={16}
                        color={el.color}
                        style={{paddingVertical: 12}}
                      />
                      <Text style={styles.textCategory}>{el.name}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.buttonCategory}>
                      <FontAwesomeIcon
                        icon={categorySearch[idx + 1].icon}
                        size={16}
                        color={categorySearch[idx + 1].color}
                        style={{paddingVertical: 12}}
                      />
                      <Text style={styles.textCategory}>
                        {categorySearch[idx + 1].name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : (
                <View></View>
              ),
            )}
            <View style={{width: 16}}></View>
          </ScrollView>
        </View>
        <View style={{marginVertical: 4}}>
          <Text style={[styles.textTitle, {marginHorizontal: 16}]}>
            Pintasan
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.cardContainer}>
            {shortcut.map(el => (
              <TouchableOpacity>
                <View style={styles.card}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesomeIcon
                      icon={el.type === 'ride' ? faMotorcycle : faCar}
                      color={COLOR_MAIN_LIGHT}
                      size={16}
                      style={{marginRight: 4}}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {el.type === 'ride' ? 'goride' : 'gocar'}
                    </Text>
                  </View>
                  <View style={{marginVertical: 12}}>
                    <Text
                      numberOfLines={1}
                      style={{color: 'black', fontWeight: '500'}}>
                      {el.titleAddres}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={{fontSize: 12, marginTop: 4}}>
                      {el.detailAddress}
                    </Text>
                  </View>
                  <Text style={{color: 'black', fontSize: 12}}>
                    {el.distance} km
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            <View style={{width: 16}}></View>
          </ScrollView>
        </View>
        <View style={{marginHorizontal: 16, marginVertical: 4}}>
          <BubbleOpt title={'Pencarian populer'} listOpt={popularSearch} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 12,
    alignItems: 'center',
  },
  textHeader: {
    width: '60%',
    color: 'black',
    fontWeight: 'bold',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: COLOR_BG_GREY,
    borderRadius: 22,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLOR_BD_GREY,
  },
  buttonCategoryContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 16,
  },
  buttonCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 14,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: COLOR_BD_GREY,
    width: 125,
    borderRadius: 14,
  },
  textCategory: {
    fontSize: 12,
    color: 'black',
    marginLeft: 12,
    fontWeight: '500',
  },
  cardContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 16,
  },
  card: {
    width: 180,
    borderWidth: 1,
    borderColor: COLOR_BD_GREY,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 16,
  },
});
