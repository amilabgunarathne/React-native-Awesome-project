import React,{ Component } from 'react';
import {AppRegistry,Text,View,Image,StyleSheet,TextInput} from 'react-native';


const styles = StyleSheet.create({
 headerBackground: {
   flex: 1,
       width: null,
       alignSelf: 'stretch',

},
header: {
flex:1,
alignItems: 'center',
justifyContent: 'center',
padding: 20,
backgroundColor: 'rbga(0,0,0,0.5)',

},
name: {
marginTop: 20,
fontSize: 18,
color: '#fff',
fontWeight: 'bold'

},

 });

export default class HelloWorldApp extends Component {
 render() {
   return (

 <Image source={require ('./app/img/bus2.jpg')} style={styles.headerBackground}>
<View style={styles.header}>
<Text style={styles.name}>Find My Bus </Text>
</View>
</Image>
   );
 }
}
