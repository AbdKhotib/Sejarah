import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  Beranda,
  Login,
  Splashscreen,
  Post,
  Profile
} from '../pages/Page';

const Button = createBottomTabNavigator();
const Navi = createNativeStackNavigator();

const Main = () => {
  return (
    <Button.Navigator
      screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, }) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = focused ? 'md-home-outline' : 'md-home';
            } else if (route.name === 'Post') {
              iconName = focused ? 'add-circle-outline' : 'add-circle';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-person-outline' : 'md-person';
            }
            return <Ionicons name={iconName} size={38} color={color} />;
          },
          tabBarActiveTintColor: '#ff5c5c',
          tabBarInactiveTintColor: '#bbbbbb',
          tabBarStyle:{
            borderTopColor:'#ff5c5c',
            backgroundColor: 'transparent',
            position: 'absolute',
            height: 60,
            elevation: 0,
            },
        })}>
        <Button.Screen name='Beranda' component={Beranda} />
        <Button.Screen name='Post' component={Post} />
        <Button.Screen name='Profile' component={Profile} />
      </Button.Navigator>
  )
}

const Route = () => {
  return (
    <SafeAreaProvider>
    <Navi.Navigator initialRouteName='Splashscreen'>
        <Navi.Screen
          name='Splashscreen'
          component={Splashscreen}
          options={{headerShown:false}} />
        <Navi.Screen name='Main'
          component={Main}
          options={{headerShown:false}} />
        <Navi.Screen name='Login' component={Login} />
    </Navi.Navigator>
    </SafeAreaProvider>
  )
}

export default Route;