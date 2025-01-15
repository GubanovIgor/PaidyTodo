import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {LoginScreen, TodoScreen} from '../screens'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={{title: 'Todo List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
