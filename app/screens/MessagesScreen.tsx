import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ListItem, ListItemDelete, ListItemSeparator } from '../components/lists';
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const deleteMessage = (messageId: number) => {
    setMessages(messages.filter(({ id }) => id !== messageId));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item: { id, title, description, image } }) => (
          <ListItem
            title={title}
            description={description}
            image={image}
            onPress={() => {}}
            renderRightActions={() => (
              <ListItemDelete onPress={() => deleteMessage(id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
