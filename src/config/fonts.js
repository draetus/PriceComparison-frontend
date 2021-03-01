import {Platform} from 'react-native';
import {configureFonts} from 'react-native-paper';

const fontDefinitions = {
  regular: {
    fontFamily: 'Poppins Regular',
    fontWeight: 'regular',
  },
  medium: {
    fontFamily: 'Poppins Bold',
    fontWeight: 'medium',
  },
  light: {
    fontFamily: 'Poppins Regular',
    fontWeight: 'light',
  },
  thin: {
    fontFamily: 'Poppins Bold',
    fontWeight: 'thin',
  },
};

const fonts = Platform.select({
  android: fontDefinitions,
  ios: fontDefinitions,
  default: fontDefinitions,
});

export default configureFonts(fonts);
