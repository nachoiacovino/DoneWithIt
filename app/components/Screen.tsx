import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';

interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Screen = ({ children, style }: ScreenProps) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
