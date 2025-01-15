import React from 'react'
import {View, Button, Text, StyleSheet, Alert} from 'react-native'
import * as LocalAuthentication from 'expo-local-authentication'

export const LoginScreen = ({navigation}) => {
  const handleLogin = async () => {
    const {success} = await LocalAuthentication.authenticateAsync()
    if (success) {
      navigation.navigate('Todo')
    } else {
      Alert.alert('Authentication failed!')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Paidy Todo App</Text>
      <Button title="Login with Biometrics" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})
