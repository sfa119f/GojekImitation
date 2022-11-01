import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.bgSplash}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bgSplash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 75,
    height: 75,
  },
});
