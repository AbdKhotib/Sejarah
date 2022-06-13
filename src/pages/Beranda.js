import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Tombol = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const Beranda = ({ navigation }) => {
  return (
    <View>
        <StatusBar backgroundColor={'orange'} />
        <Tombol
          label={'Ke satu'}
          onPress={() => navigation.navigate('Partsatu')}
        />
        <Tombol
          label={'Ke dua'}
          onPress={() => navigation.navigate('Partdua')}
        />
        <Tombol
         label={'Ke tiga'}
         onPress={() => navigation.navigate('Parttiga')} />
    </View>
  )
}

export default Beranda;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 20,
    elevation: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});