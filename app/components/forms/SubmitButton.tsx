import { useFormikContext } from 'formik';
import React from 'react';

import Button, { AppButtonProps } from '../Button';

interface SubmitButtonProps extends AppButtonProps {}

const SubmitButton = ({ title, ...rest }: SubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();

  return <Button {...rest} title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
