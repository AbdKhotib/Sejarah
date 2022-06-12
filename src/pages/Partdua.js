import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    Button,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

const Partdua = () => {
  return (
    <View>
      <Button title='coba button' style={styles.button} />
    </View>
  )
}

export default Partdua

const styles = StyleSheet.create({
    button:{
        color: 'red'
    }
})