import React from 'react';
import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import Text from '../Text';

interface ErrorMessageProps {
  error: string | undefined;
  touched: boolean | undefined;
}

const ErrorMessage = ({ error, touched }: ErrorMessageProps) => {
  return error && touched ? <Text style={styles.error}>{error}</Text> : null;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
