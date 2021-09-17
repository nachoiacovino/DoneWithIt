import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

interface AppTextInputProps extends TextInputProps {
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

const AppTextInput = ({
  iconName,
  ...rest
}: AppTextInputProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={27}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={[defaultStyles.text, styles.textInput]} {...rest} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    width: '100%',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
