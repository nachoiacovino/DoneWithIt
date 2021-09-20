import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ListItem, ListItemDelete, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'Nacho Iacovino',
    description: 'Hey! Is this item still available?',
    image: require('../assets/nacho.jpg'),
  },
  {
    id: 2,
    title: 'Nacho Iacovino',
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require('../assets/nacho.jpg'),
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
