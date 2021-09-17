import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

interface IconProps {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

const Icon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}: IconProps): JSX.Element => {
  return (
    <View style={styles(size, backgroundColor).icon}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
};

export default Icon;

const styles = (size: number, backgroundColor: string) =>
  StyleSheet.create({
    icon: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
