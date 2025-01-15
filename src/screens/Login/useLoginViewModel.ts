import { useDispatch } from "react-redux";
import { useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { login } from "../../store/authSlice";
import { Alert, NativeModules } from "react-native";

const { OpenSecureSettings } = NativeModules;

export const useLoginViewModel = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBiometricAuth = async () => {
    setIsLoading(true);
    try {
      const hasAuthMethods = await LocalAuthentication.isEnrolledAsync();
      const types =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

      if (!hasAuthMethods) {
        OpenSecureSettings.openSecureSettings();
        Alert.alert(
          "No Authentication Methods",
          "No PIN code, Face ID, or Touch ID registered. Please set it up in the device settings."
        );
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate to access your TODO list",
        cancelLabel: "Cancel",
        fallbackLabel: "Enter PIN",
      });

      if (result.success) {
        dispatch(login({ token: "secured-access-token" }));
      } else {
        setError("Authentication was canceled or failed.");
      }
    } catch (e: any) {
      setError(`Error: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleBiometricAuth,
    isLoading,
    error,
  };
};
