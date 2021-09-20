import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name='ListingEdit'
        component={ListingEditScreen}
        options={{ title: 'Add listing' }}
      />
      <Tab.Screen
        name='AccountNavigator'
        component={AccountNavigator}
        options={{ headerShown: false, title: 'Account' }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
