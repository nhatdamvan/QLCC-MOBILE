import React, { useState } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
const Stack = createNativeStackNavigator();

import TabNavigator from './TabNavigator';
import {
  LoginScreen, SplashScreen,
} from '../screens';


const AuthNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AuthNavigator;