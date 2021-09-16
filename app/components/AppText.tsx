import React from 'react';
import { Platform, StyleSheet, Text, TextStyle } from 'react-native';

interface AppTextProps {
  children: React.ReactNode;
  style: TextStyle;
}

const AppText = ({ children, style }: AppTextProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppText;
