import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen, { Listing } from '../screens/ListingsScreen';

const Stack = createNativeStackNavigator();

export type FeedStackParamList = {
  Listings: undefined;
  ListingDetails: Listing;
};

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Listings' component={ListingsScreen} />
      <Stack.Screen name='ListingDetails' component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
