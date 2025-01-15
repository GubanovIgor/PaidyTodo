import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATHS } from "../constants";
import { RootStackParamList } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "../store/types";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={PATHS.AUTH_NAVIGATOR}
        screenOptions={{
          headerShown: false,
        }}
      >
        {isLoggedIn ? (
          <Stack.Screen name={PATHS.MAIN_NAVIGATOR} component={MainNavigator} />
        ) : (
          <Stack.Screen name={PATHS.AUTH_NAVIGATOR} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
