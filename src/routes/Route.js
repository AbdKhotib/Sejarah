import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Beranda,
  Partsatu,
  Partdua,
  Login,
  Splashscreen,
  Parttiga,
  Profile
} from '../pages/Page';

const Button = createBottomTabNavigator();
const Navi = createNativeStackNavigator();

const Main = () => {
  return (
    <Button.Navigator
      screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = focused ? 'md-home' : 'md-home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-person' : 'md-person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'white',
          tabBarStyle:{
            backgroundColor: 'orange'
            },
        })}>
        <Button.Screen name='Beranda' component={Beranda} />
        <Button.Screen name='Profile' component={Profile} />
      </Button.Navigator>
  )
}

const Route = () => {
  return (
    <Navi.Navigator initialRouteName='Splashscreen'>
        <Navi.Screen
          name='Splashscreen'
          component={Splashscreen}
          options={{headerShown:false}} />
        <Navi.Screen name='Main'
          component={Main}
          options={{headerShown:false}} />
        <Navi.Screen name='Partsatu' component={Partsatu} />
        <Navi.Screen name='Partdua' component={Partdua} />
        <Navi.Screen name='Parttiga' component={Parttiga} />
        <Navi.Screen name='Login' component={Login} />
    </Navi.Navigator>
  )
}

export default Route;