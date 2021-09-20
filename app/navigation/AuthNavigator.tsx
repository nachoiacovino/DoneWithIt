import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
