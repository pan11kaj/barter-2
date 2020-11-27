import React from 'react';
import {View,TextInput,Text,StyleSheet,TouchableOpacity,ToastAndroid, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase'
export default class Login extends React.Component{
constructor(){
    super();
    this.state={
        email:'',password:''
    }
}
signup =(e,p)=>{
firebase.auth().createUserWithEmailAndPassword(e,p)
.then((response)=>{
 return Alert.alert('signed succes')
})
.catch((error)=>{
    var errcode = error.code;
    var msg = error.message;
    Alert.alert(msg)
})
}
login = (e,p)=>{
    firebase.auth().signInWithEmailAndPassword(e,p)
    .then(()=>{
        return ToastAndroid.show('login succesfull',ToastAndroid.SHORT)
    })
    .catch((error)=>{
        var errcode = error.code;
    var msg = error.message;
    Alert.alert(msg)
    })
}
render(){
    return(
        <View>
    <TextInput 
      style={styles.inputs}
      placeholder="enter eamil"
      onChangeText={text=>{this.setState({email:text})}}
    />
      <TextInput 
      secureTextEntry
      style={styles.inputs}
      placeholder="enter password"
      onChangeText={text=>{this.setState({password:text})}}
    />
    <TouchableOpacity style={styles.buttons}
    onPress={()=>{this.signup(this.state.email,this.state.password)}}>
        <Text style={styles.textinput}>SignUp</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttons}
    onPress={()=>{this.login(this.state.email,this.state.password)}}>
        <Text style={styles.textinput}>Login</Text>
    </TouchableOpacity>
   
        </View>
     
    )
}
    
}
const styles = StyleSheet.create({
inputs:{
 width:200,height:60,justifyContent:'center',borderColor:'red',
 borderWidth:2,marginTop:17,
},buttons:{
    justifyContent:"center",alignItems:'center',
    backgroundColor:'red',width:200,borderRadius:30,marginLeft:10,
    height:50,marginTop:30
},textinput:{
    color:'white',textAlign:'center'
}


})