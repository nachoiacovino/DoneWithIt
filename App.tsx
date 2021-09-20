import React, { useState } from 'react';

import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}
