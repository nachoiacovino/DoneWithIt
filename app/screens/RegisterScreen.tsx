import React from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => (
  <Screen style={styles.container}>
    <AppForm
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        autoCorrect={false}
        iconName='account'
        name='name'
        placeholder='Name'
      />
      <AppFormField
        autoCapitalize='none'
        autoCorrect={false}
        iconName='email'
        keyboardType='email-address'
        name='email'
        placeholder='Email'
        textContentType='emailAddress'
      />
      <AppFormField
        autoCapitalize='none'
        autoCorrect={false}
        iconName='lock'
        name='password'
        placeholder='Password'
        secureTextEntry
        textContentType='password'
      />
      <SubmitButton title='Register' />
    </AppForm>
  </Screen>
);

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
