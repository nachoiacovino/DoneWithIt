import { useFormikContext } from 'formik';
import React from 'react';

import AppTextInput, { AppTextInputProps } from './AppTextInput';
import ErrorMessage from './ErrorMessage';

interface AppFormFieldProps extends AppTextInputProps {
  name: string;
}

const AppFormField = ({ name, ...rest }: AppFormFieldProps) => {
  const { handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput onChangeText={handleChange(name)} {...rest} />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};

export default AppFormField;
