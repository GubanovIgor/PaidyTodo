import React from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { PATHS } from "../../constants";
import { LoginScreenNavigationProp } from "../../navigation/types";

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = async () => {
    // const {success} = await LocalAuthentication.authenticateAsync()

    // if (success) {
    navigation.navigate(PATHS.TODO_SCREEN);
    // } else {
    //   Alert.alert('Authentication failed!')
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Paidy Todo App</Text>
      <Button title="Login with Biometrics" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
