import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import { AuthStackParamList } from '../navigation/AuthNavigator';

type WelcomeScreenProps = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

const WelcomeScreen = ({ navigation: { navigate } }: WelcomeScreenProps) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title='Login' onPress={() => navigate('Login')} />
        <Button
          title='Register'
          onPress={() => navigate('Register')}
          color='secondary'
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
