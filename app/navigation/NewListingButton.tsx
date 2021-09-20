import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import colors from '../config/colors';

interface NewListingButtonProps {
  onPress: () => void;
}

const NewListingButton = ({ onPress }: NewListingButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <MaterialCommunityIcons
        name='plus-circle'
        color={colors.white}
        size={40}
      />
    </View>
  </TouchableOpacity>
);

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 3,
    bottom: 14,
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
});
