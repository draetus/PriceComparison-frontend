import {Platform} from 'react-native';

import Theme from './theme';
import Logos from './logos';
import Metrics from './metrics';
import pagesConfig from './pagesConfig';

const KeyboardAvoidingViewBehavior = Platform.OS === 'ios' ? 'padding' : null;

export {
  KeyboardAvoidingViewBehavior,
  Logos,
  Metrics,
  pagesConfig,
  Theme,
};
