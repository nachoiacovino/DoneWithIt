import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { FeedStackParamList } from '../navigation/FeedNavigator';

export interface Listing {
  id: number;
  title: string;
  price: number;
  image: any;
}

const listings: Listing[] = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
];

type ListingsScreenProps = NativeStackScreenProps<
  FeedStackParamList,
  'Listings'
>;

const ListingsScreen = ({ navigation: { navigate } }: ListingsScreenProps) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={'$' + item.price}
            image={item.image}
            onPress={() => navigate('ListingDetails', item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
