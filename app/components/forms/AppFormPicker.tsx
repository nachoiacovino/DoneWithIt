import { useFormikContext } from 'formik';
import React from 'react';

import AppPicker, { AppPickerProps } from '../AppPicker';
import ErrorMessage from './ErrorMessage';

interface AppFormPickerProps extends AppPickerProps {
  name: string;
}

const AppFormPicker = ({ items, name, prompt }: AppFormPickerProps) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onValueChange={(item) => setFieldValue(name, item)}
        selectedValue={values[name]}
        prompt={prompt}
      />
      <ErrorMessage error={errors[name]} touched={touched[name]} />
    </>
  );
};

export default AppFormPicker;
