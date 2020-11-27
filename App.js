import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from './Screens/Login'
export default function App() {
  return (
    <View style={styles.container}>
      <Image
      style={{width:200,height:200,justifyContent:'center',marginTop:-30}}
      source={require('./assets/img.png')}
      />
      <Text style={{justifyContent:'center',fontSize:27,}}>BARTER</Text>
    <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
