import { Picker, PickerProps } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

export interface AppPickerProps extends PickerProps {
  items: { label: string; value: number }[];
}

const AppPicker = ({
  items,
  onValueChange,
  selectedValue,
  prompt,
  ...rest
}: AppPickerProps): JSX.Element => (
  <View style={styles.container}>
    <Picker
      {...rest}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      prompt={prompt}
    >
      {items.map(({ label, value }) => (
        <Picker.Item key={value} label={label} value={value} />
      ))}
    </Picker>
  </View>
);

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
});
