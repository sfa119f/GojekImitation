import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Beranda, Promo, Pesanan, Chat, Splash, Profil, Search} from '../pages';
import {BottomNav} from '../components';

const TabNav = createBottomTabNavigator();
const StackNav = createNativeStackNavigator();

const MainApp = () => {
  return (
    <TabNav.Navigator tabBar={props => <BottomNav {...props} />}>
      <TabNav.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      <TabNav.Screen
        name="Promo"
        component={Promo}
        options={{headerShown: false}}
      />
      <TabNav.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <TabNav.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </TabNav.Navigator>
  );
};

const Router = () => {
  return (
    <StackNav.Navigator initialRouteName="Splash">
      <StackNav.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false}}
      />
    </StackNav.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
