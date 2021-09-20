import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { ListItem } from '../components/lists';
import Text from '../components/Text';
import colors from '../config/colors';
import { FeedStackParamList } from '../navigation/FeedNavigator';

type ListingDetailsScreenProps = NativeStackScreenProps<
  FeedStackParamList,
  'ListingDetails'
>;

const ListingDetailsScreen = ({ route }: ListingDetailsScreenProps) => {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/nacho.jpg')}
            title='Nacho Iacovino'
            description='5 Listings'
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
