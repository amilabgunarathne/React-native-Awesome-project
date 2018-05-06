import React,{ Component } from 'react';
import {AppRegistry,Text,View,Image,StyleSheet,TextInput} from 'react-native';
//import header from './app/components/header';

const styles = StyleSheet.create({
 container: {
   flex: 1,
     backgroundColor :'#000',
      alignItems: 'center',
        marginRight:10000,
        width: '100%',
      height: '100%',
      //resizeMode: 'cover',
  } });



export default class HelloWorldApp extends Component {
 render() {
   return (
 <Image source={require('./app/img/bus2.jpg')} style={styles.container}/>

   );
 }
}


AppRegistry.registerComponent(
 'HelloWorldApp',
 () => HelloWorldApp
);
