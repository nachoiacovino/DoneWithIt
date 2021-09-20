import React from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';

import { Form, FormField, FormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label('Title'),
  price: yup.number().required().min(1).max(10000).label('Price'),
  description: yup.string().label('Description'),
  category: yup.object().required().nullable().label('Category'),
});

const items = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

const ListingEditScreen = () => (
  <Screen style={styles.container}>
    <Form
      initialValues={{
        title: '',
        price: '',
        description: '',
        category: null,
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <FormField maxLength={255} name='title' placeholder='Title' />
      <FormField
        keyboardType='numeric'
        maxLength={8}
        name='price'
        placeholder='Price'
      />
      <FormPicker items={items} name='category' prompt='Category' />
      <FormField
        maxLength={255}
        multiline
        name='description'
        numberOfLines={3}
        placeholder='Description'
      />
      <SubmitButton title='Post' />
    </Form>
  </Screen>
);

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
