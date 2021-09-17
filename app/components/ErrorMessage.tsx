import React from 'react';
import { StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

interface ErrorMessageProps {
  error: string | undefined;
  touched: boolean | undefined;
}

const ErrorMessage = ({ error, touched }: ErrorMessageProps) => {
  return error && touched ? (
    <AppText style={styles.error}>{error}</AppText>
  ) : null;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
