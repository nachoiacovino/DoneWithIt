import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator();

export type AccountStackParamList = {
  Account: undefined;
  Messages: undefined;
};

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Account' component={AccountScreen} />
      <Stack.Screen name='Messages' component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
