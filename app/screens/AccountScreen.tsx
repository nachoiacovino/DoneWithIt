import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Icon from '../components/Icon';
import { ListItem, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { AccountStackParamList } from '../navigation/AccountNavigator';

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
    targetScreen: 'Messages',
  },
];

type AccountScreenProps = NativeStackScreenProps<
  AccountStackParamList,
  'Account'
>;

const AccountScreen = ({ navigation: { navigate } }: AccountScreenProps) => {
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
          renderItem={({ item: { title, icon, targetScreen } }) => (
            <ListItem
              title={title}
              Icon={
                <Icon name={icon.name} backgroundColor={icon.backgroundColor} />
              }
              onPress={() => navigate(targetScreen)}
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
