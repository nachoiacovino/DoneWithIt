import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={initialMessages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item: { id, title, description, image } }) => (
          <ListItem
            key={id}
            title={title}
            description={description}
            image={image}
            onPress={() => null}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
