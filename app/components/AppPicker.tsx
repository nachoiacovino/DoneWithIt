import { Picker, PickerProps } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

interface AppPickerProps extends PickerProps {}

const AppPicker = ({ ...rest }: AppPickerProps): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
        >
          {categories.map(({ label, value }) => (
            <Picker.Item key={value} label={label} value={value} />
          ))}
        </Picker>
      </View>
    </>
  );
};

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
