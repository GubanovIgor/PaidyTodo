import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useLoginViewModel } from "./useLoginViewModel";

export const LoginScreen: React.FC = () => {
  const { handleBiometricAuth, isLoading, error } = useLoginViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Paidy Todo App</Text>
      <Button
        title={isLoading ? "Authenticating..." : "Login with Biometrics"}
        onPress={handleBiometricAuth}
        disabled={isLoading}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
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
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
