import { View, Text } from 'react-native'
import React from 'react'
import login from '../Newprojec/Screen/login'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={login} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}


export default App