import {Dimensions, Platform, PixelRatio} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {width, height} = Dimensions.get('window');

const baseWidthSize = 320;
const scale = width / baseWidthSize;

function getSize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const screenWidth = height < width ? height : width;
const screenHeight = width < height ? height : width;

const spacingMinimun = getSize(4);
const spacingSM = getSize(8);
const spacingMD = getSize(12);
const spacingLG = getSize(24);
const spacingXLG = getSize(36);

const statusBarHeight = getStatusBarHeight();
const headerHeight = statusBarHeight + 64;
const subHeaderHeight = 32;
const headerTotalHeight = headerHeight + subHeaderHeight;

const refresherSize = 80;

export default {
  screenWidth,
  screenHeight,
  headerHeight,
  subHeaderHeight,
  statusBarHeight,
  headerTotalHeight,
  spacingMinimun,
  spacingSM,
  spacingMD,
  spacingLG,
  spacingXLG,
  refresherSize,
  getSize,
};
