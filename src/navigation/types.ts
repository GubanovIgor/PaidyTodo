import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Todo: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export type TodoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Todo"
>;
