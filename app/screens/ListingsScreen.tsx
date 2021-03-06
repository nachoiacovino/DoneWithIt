import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import listingsApi from '../api/listings';
import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Card from '../components/Card';
import Screen from '../components/Screen';
import Text from '../components/Text';
import colors from '../config/colors';
import useApi from '../hooks/useApi';
import Listing from '../interfaces/listing';
import { FeedStackParamList } from '../navigation/FeedNavigator';

type ListingsScreenProps = NativeStackScreenProps<
  FeedStackParamList,
  'Listings'
>;

const ListingsScreen = ({ navigation: { navigate } }: ListingsScreenProps) => {
  const [listings, loading, error, retry] = useApi<Listing[]>(
    listingsApi.getListings,
  );

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <Button onPress={retry} title='Retry' />
        </>
      )}
      <ActivityIndicator animating={loading} />
      <FlatList
        data={listings}
        keyExtractor={({ id }) => id + ''}
        renderItem={({ item }: { item: Listing }) => (
          <Card
            title={item.title}
            description={'$' + item.price}
            imageUrl={item.images[0].url}
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
