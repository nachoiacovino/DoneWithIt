import React from 'react';

import Screen from './app/components/Screen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return (
    <Screen>
      <MessagesScreen />
    </Screen>
  );
}
