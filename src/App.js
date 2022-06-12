import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Setting from './routes/Setting';
import Home from './routes/Route';

const Button = createBottomTabNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Button.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-home' : 'home-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'md-settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Button.Screen name='Home' component={Home} />
        <Button.Screen name='Setting' component={Setting} />
      </Button.Navigator>
    </NavigationContainer>
  )
}