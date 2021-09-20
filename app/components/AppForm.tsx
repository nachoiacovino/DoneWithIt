import { Formik } from 'formik';
import React from 'react';

interface AppFormProps {
  initialValues: object;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: React.ReactNode;
}

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <>{children}</>
  </Formik>
);

export default AppForm;
