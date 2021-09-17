import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import defaultStyles from '../config/styles';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style: TextStyle;
}

const AppText = ({ children, style, ...rest }: AppTextProps) => {
  return (
    <Text style={[defaultStyles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
