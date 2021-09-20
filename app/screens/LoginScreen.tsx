import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as yup from 'yup';

import { Form, FormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name='email'
          iconName='email'
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Email'
          textContentType='emailAddress'
          keyboardType='email-address'
        />
        <FormField
          name='password'
          iconName='lock'
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Password'
          textContentType='password'
          secureTextEntry
        />
        <SubmitButton title='Login' />
      </Form>
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
