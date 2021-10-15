import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from '../auth/login';
export default function main() {
  const [signed, setSignin] = useState(false);
  return (
    <View style={styles.container}>
      {signed?<Text>welcome</Text>:<Login/>}
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
