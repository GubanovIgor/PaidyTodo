import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useLoginViewModel } from "./useLoginViewModel";

export const LoginScreen: React.FC = () => {
  const { handleBiometricAuth, isLoading, error } = useLoginViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Paidy Secure Todo App</Text>
      <Button
        title={isLoading ? "Authenticating..." : "Secure Login"}
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
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});
