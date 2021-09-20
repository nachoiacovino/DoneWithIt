import { useFormikContext } from 'formik';
import React from 'react';

import AppButton, { AppButtonProps } from '../AppButton';

interface SubmitButtonProps extends AppButtonProps {}

const SubmitButton = ({ title, ...rest }: SubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton {...rest} title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
