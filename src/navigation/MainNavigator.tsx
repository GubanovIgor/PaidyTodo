import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TodoScreen } from "../screens";
import { PATHS } from "../constants";

const Tab = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ title: "Todos" }}
        name={PATHS.TODO_SCREEN}
        component={TodoScreen}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
