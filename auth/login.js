import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import main from '../screen/main'

export default function Login() {

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
            <main/>
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
      
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={logInfacebok} title='Login with facebook'/>
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

