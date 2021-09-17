import React from 'react';

import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <ListItem
        title='My title'
        description='Subtitle'
        Icon={<Icon name='email' />}
        onPress={() => {}}
      />
    </Screen>
  );
}
