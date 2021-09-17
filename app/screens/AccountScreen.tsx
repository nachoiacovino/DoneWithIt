import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Nacho Iacovino'
          description='nacho.iacovino@gmail.com'
          image={require('../assets/nacho.jpg')}
          onPress={() => {}}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={({ title }) => title}
          renderItem={({ item: { title, icon } }) => (
            <ListItem
              title={title}
              Icon={
                <Icon name={icon.name} backgroundColor={icon.backgroundColor} />
              }
              onPress={() => {}}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <ListItem
        title='Log out'
        Icon={<Icon name='logout' backgroundColor='#ffe66d' />}
        onPress={() => {}}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
