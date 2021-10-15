import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';

export default function App() {
  const [signed, setSignin] = useState(false);


  async function logInfacebok() {
    try {
      await Facebook.initializeAsync({
        appId: '1008123863106181',
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        setSignin(true)
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  function GoMain(){
    return(
      <View style={styles.container}>
        <Text>welcome</Text>
      </View>
    )
  }
  function GoLogin(){
    return(
      <View style={styles.container}>
        <Text>ssss!</Text>
        <Button onPress={logInfacebok} title='Login with facebook'/>
      </View>
    )
  }
  
return (
  signed?GoMain():GoLogin()
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
