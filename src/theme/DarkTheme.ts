import type {Theme} from '../utils/types';
import configureFonts from './font';

let DarkTheme: Theme;

DarkTheme = {
  dark: true,
  colors: {
    primary: '#bfa002',
    primaryVariant: '#3700B3',
    secondary: '#03DAC6',
    secondaryVariant: '#018786',
    background: '#262833',
    error: '#CF6679',
    textColor: '#FFF',
    shadowColor: '#D7D7D7',
    black: '#000',
    white: '#FFF',
    lightgrey: '#D7D7D7',
    backgroundLayout: 'rgba(53, 53, 53, 0.8)',
    transparent: 'transparent',
    linkColor: '#0000EE',
    greyOpac50: 'rgba(53, 53, 53, 0.5)',
    greyOpac10: 'rgba(53, 53, 53, 0.1)',
  },
  fonts: configureFonts(),
};

export default DarkTheme;
