/* @flow */
import {DarkTheme as PaperDarkTheme} from 'react-native-paper';

import fonts from './fonts';

// Branco Geral
const white = '#FFFFFF';
// Azul Primário / Claro-Médio
const chambray = '#365599';
// Dourado
const husk = '#B9A353';
// Azul Secundário / Médio-Escuro
const rhino = '#2D3F63';
// Azul Terciário / Escuro
// const cloudBurst = '#212D45';
// Cinza Escuro / Fontes
const boulder = '#797979';
// Vermelho Erro
const monza = '#CB003E';
// Verde Sucesso
const mantis = '#6ECF59';
// Amarelo Alerta
const brightSun = '#FCCA42';
// Light Background
const alabaster = '#F7F7F7';
// Azul Drawer Background
const cello = '#1C305B';
// Azul Drawer contraste
const bunting = '#17274B';

const blackWithAlpha = '#00000050';
const softGray = '#F5F5F5';
// const softGray2 = '#606060';
// const primaryColor = '#F9A36B';
// const secondaryColor = '#292929';
// const darkGray = '#292929';
// const darkGray2 = '#606060';
// const red = '#B84B4B';
// const orange = '#F9A36B';
const darkBlue = '#002C43';
const darkRed = '#A61E14';
//const darkBlue = '#011B2F';
// const lightGray = '#F9F8F8';
const lightGray2 = '#dadede';
const colorBackdrop = blackWithAlpha;
const textInfo = '#AFAFAF';
// const yellow = '#FFBF29';

const commonTheme = {
  ...PaperDarkTheme,
  roundness: 0,
  colors: {
    ...PaperDarkTheme.colors,

    buttonText: white,
    textButton: white,
    textInfo: textInfo,
    buttonAlternativeBackground: white,
    disabledTextWithBackground: white,

    buttonAlternativeText: darkBlue,
    buttonBackground: husk,
    buttonHeader: lightGray2,

    background: alabaster,
    backgroundHeader: darkBlue,
    disabledBackground: '#DFDFDF',
    disabledText: '#DFDFDF',

    backdrop: colorBackdrop,
    error: monza,
    success: mantis,
    warning: brightSun,
    darkRed: darkRed,
    darkBlue: darkBlue,
    lightGray2: lightGray2,
  },
  fonts,
};

const light = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,

    buttonText: white,
    buttonBackground: husk,

    buttonAlternativeText: darkBlue,
    buttonAlternativeBackground: white,

    textButton: husk,

    primary: rhino,
    text: boulder,
    subText: boulder + '90',
    disabled: boulder + '90',

    placeholder: boulder + '90',

    accent: chambray,
    accentContrast: rhino,

    accent2: husk,

    surface: softGray,

    background: alabaster,
    backgroundContrast: white,
    undergroundLine: rhino,

    dividerColor: boulder + '50',
  },
};

const blueBackground = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,

    textButton: white,
    background: cello,
    backgroundContrast: bunting,

    accent: husk,
  },
};

const header = {
  ...commonTheme,
  colors: {
    ...commonTheme.colors,
    text: boulder,
    background: white,
    accent: husk,
  },
};

// const cardPaperTheme = {
//   ...commonTheme,
//   colors: {
//     ...commonTheme.colors,

//     textButton: darkGray2,

//     primary: darkGray2,
//     text: darkGray2,
//     subText: darkGray2 + '90',
//     disabled: darkGray2,

//     placeholder: textInfo,
//     accent: darkGray2,

//     surface: softGray,

//     background: lightGray,
//     backgroundHeader: lightGray,
//     undergroundLine: darkGray2,
//   },
// };

export default {
  commonTheme,
  blueBackground,
  header,
  light,
};
