import React, { useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout ( () => {
      navigation.replace('Main');
    }, 3000)
  }, [navigation]);
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Splashscreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 24,
    fontStyle: 'italic',
    color: '#aaaaaa',
  },
})

export default Splashscreen;