import React from 'react';
import { View, Text, Image, StatusBar, ScrollView,} from 'react-native';

const Beranda = () => {
  return (
    <ScrollView>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
      <View  style={{backgroundColor:'#000000', justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'white'}}>Beranda</Text>
        <Image source={require('../icon/istockphoto-1224500457-612x612.jpg')}/>
        <Image source={require('../icon/istockphoto-1224500457-612x612.jpg')}/>
        <Image source={require('../icon/istockphoto-1224500457-612x612.jpg')}/>
        <Image source={require('../icon/istockphoto-1224500457-612x612.jpg')}/>
        <Image source={require('../icon/istockphoto-1224500457-612x612.jpg')}/>
      </View>
    </ScrollView>
  )
}

export default Beranda