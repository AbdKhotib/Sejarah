import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const Tombol = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export class Beranda extends Component {
  render() {
    return (
      <View>
        <Tombol
          label={'Pertama'}
          onPress={() => this.props.navigation.navigate('Partsatu')}
        />
        <Tombol label={'Kedua'} />
        <Tombol label={'Ketiga'} />
      </View>
    );
  }
}

export default Beranda;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});
