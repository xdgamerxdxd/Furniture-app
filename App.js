import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './app/screens/SignIn';
import Example from './app/screens/Example';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen 
          name="SignIn" 
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Example" 
          component={Example}
          options={{ 
            title: 'Welcome',
            headerLeft: () => null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 