import { Platform, TextStyle } from 'react-native';

import colors from './colors';

interface Styles {
  text: TextStyle;
}

const defaultStyles: Styles = {
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  }
};

export default defaultStyles;