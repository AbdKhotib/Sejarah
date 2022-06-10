import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import partsatu from '../pages/Part1';

const Navi = createNativeStackNavigator();

const Route = () => {
  return (
    <Navi.Navigator>
        <Navi.Screen name='partsatu' component={partsatu} />
    </Navi.Navigator>
  )
}

export default Route