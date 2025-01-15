import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useLoginViewModel } from "./useLoginViewModel";

export const LoginScreen: React.FC = () => {
  const { handleBiometricLogin, isLoading, error } = useLoginViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Paidy Todo App</Text>

      {error && <Text style={styles.error}>{error}</Text>}

      <Button
        title="Login with Biometrics"
        onPress={handleBiometricLogin}
        disabled={isLoading}
      />

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
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
  error: {
    color: "red",
    marginBottom: 10,
  },
});
