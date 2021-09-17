import { Formik } from 'formik';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched }) => (
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
            <ErrorMessage error={errors.email} touched={touched.email} />
            <AppTextInput
              iconName='lock'
              onChangeText={handleChange('password')}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Password'
              textContentType='password'
              secureTextEntry
            />
            <ErrorMessage error={errors.password} touched={touched.password} />
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
