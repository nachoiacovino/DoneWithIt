import React from 'react';
import { Image, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppTextInput
        iconName='email'
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Email'
        textContentType='emailAddress'
        keyboardType='email-address'
      />
      <AppTextInput
        iconName='lock'
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Password'
        textContentType='password'
        secureTextEntry
      />
      <AppButton title='Login' onPress={() => {}} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
