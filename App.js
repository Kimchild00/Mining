import React from 'react';
import { NativeBaseProvider,extendTheme, Text, Box} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigator from './src/Navigations/AppNavigator';
// import AppBar from './src/Components/AppBar';
import LoginScreen from './src/Screens/LoginScreen';
import SignUpScreen from './src/Screens/SignUpScreen';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppNavigator/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}