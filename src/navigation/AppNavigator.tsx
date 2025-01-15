import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, TodoScreen } from "../screens";
import { PATHS } from "../constants";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PATHS.LOGIN_SCREEN}>
        <Stack.Screen
          name={PATHS.LOGIN_SCREEN}
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name={PATHS.TODO_SCREEN}
          component={TodoScreen}
          options={{ title: "Todo List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
