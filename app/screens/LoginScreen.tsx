import { Formik } from 'formik';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              iconName='email'
              onChangeText={handleChange('email')}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Email'
              textContentType='emailAddress'
              keyboardType='email-address'
            />
            <AppTextInput
              iconName='lock'
              onChangeText={handleChange('password')}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Password'
              textContentType='password'
              secureTextEntry
            />
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
