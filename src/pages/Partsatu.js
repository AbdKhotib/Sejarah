import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPertama: null,
      inputKedua: null,
      fullText: null,
    };
  }

  getInputSatu = text => {
    this.setState({inputPertama: text});
  };

  getInputDua = text => {
    this.setState({inputKedua: text});
  };

  
  updateFullText = () => {
    let text1 = this.state.inputPertama;
    let text2 = this.state.inputKedua;
    if (text1 !== null && text2 !== null && text1 !== ' ' && text2 !== ' ') {
      this.setState({fullText: text1 + ' ' + text2});
    } else {
      Alert.alert('Info', 'lengkapi pengisian');
    }
  };

  render() {
    return (
      <View style={styles.Wie}>
        <StatusBar backgroundColor={'orange'} />
        <Text>Out text : {this.state.fullText}</Text>
        <Text style={{color: this.state.warnaText}}>Halo Semua..!!!</Text>
        <TextInput
          onChangeText={text => this.getInputSatu(text)}
          style={styles.input}
        />
        <TextInput
          onChangeText={text => this.getInputDua(text)}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => this.updateFullText()}
          style={styles.btn}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  Wie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'orange',
    padding: 10,
    width:100,
    marginVertical: 20,
    borderRadius:10,
    alignItems:'center',
  },
  input: {
    margin: 5,
    borderRadius: 20,
    borderWidth:1,
    padding: 10,
    width: 300,
  },
});