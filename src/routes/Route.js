import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Beranda, Partsatu, Partdua} from '../pages/Page';

const Navi = createNativeStackNavigator();

const Route = () => {
  return (
    <Navi.Navigator>
        <Navi.Screen name='Beranda' component={Beranda} />
        <Navi.Screen name='Partsatu' component={Partsatu} />
        <Navi.Screen name='Partdua' component={Partdua} />
    </Navi.Navigator>
  )
}

export default Route