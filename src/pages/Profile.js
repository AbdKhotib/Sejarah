import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';


const Profile = ({navigation}) => {
  return (
    <View style={style.screen}>
      <StatusBar barStyle={'dark-content'} />
      <View style={style.icon}>
        <Ion name='person-circle' size={180} color={'#bbbbbb'} />
      </View>
      <View style={style.user}>
        <Text>Username</Text>
      </View>
      <View style={style.button}>
        <TouchableOpacity  style={style.btndftr}>
          <Text>Daftar</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={style.btnlgn} onPress={() => navigation.navigate('Login')}>
          <Text>login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create ({
  screen : {
    flex : 1,
    alignItems : 'center',
  },
  icon : {
    marginTop : 50,
  },
  user : {
    marginBottom : 40,
  },
  button : {
    flexDirection : 'row',
  },
  btndftr : {
    borderWidth : 1,
    borderColor : '#aaaaaa',
    borderRadius : 5,
    paddingVertical : 12,
    paddingHorizontal : 70,
    margin : 4,
  },
  btnlgn : {
    borderWidth : 1,
    borderColor : '#aaaaaa',
    borderRadius : 5,
    paddingVertical : 12,
    paddingHorizontal : 24,
    margin : 4,
  }
})

export default Profile