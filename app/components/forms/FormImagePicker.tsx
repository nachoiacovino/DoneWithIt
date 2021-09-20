import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

interface FormImagePickerProps {
  name: string;
}

const FormImagePicker = ({ name }: FormImagePickerProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const uris: string[] = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...uris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      uris.filter((imgUri) => imgUri !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        uris={uris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
