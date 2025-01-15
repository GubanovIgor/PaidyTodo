import { useDispatch } from "react-redux";
import { useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { login } from "../../store/authSlice";
import { Alert, Linking, Platform } from "react-native";
// import IntentLauncher from "react-native-intent-launcher";

export const useLoginViewModel = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

//   const openSecuritySettings = () => {
//     if (Platform.OS === "android") {
//       IntentLauncher.startActivity({
//         action: "android.settings.SECURITY_SETTINGS",
//       });
//     }
//   };

  const handleBiometricAuth = async () => {
    setIsLoading(true);
    try {
      const isSupported = await LocalAuthentication.hasHardwareAsync();
      if (!isSupported) {
        setError("Your device does not support biometric authentication.");
        return;
      }

      const hasBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!hasBiometrics) {
        Alert.alert(
          "No Biometric Data Registered",
          "Would you like to set up a screen lock or PIN?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Go to Settings",
              onPress: () => Linking.openSettings(),
            },
          ]
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
