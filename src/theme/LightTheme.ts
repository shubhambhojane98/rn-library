import type {Theme} from '../utils/types';
import configureFonts from './font';

let LightTheme: Theme;

LightTheme = {
  dark: false,
  colors: {
    primary: '#FAD000',
    primaryVariant: '#3700B3',
    secondary: '#03DAC6',
    secondaryVariant: '#018786',
    background: '#FFF',
    error: '#B00020',
    textColor: '#000',
    shadowColor: '#222',
    black: '#000',
    white: '#FFF',
    lightgrey: '#D7D7D7',
    backgroundLayout: 'rgba(0, 0, 0, 0.8)',
    transparent: 'transparent',
    linkColor: '#0000EE',
    greyOpac50: 'rgba(53, 53, 53, 0.5)',
    greyOpac10: 'rgba(53, 53, 53, 0.1)',
  },
  fonts: configureFonts(),
};

export default LightTheme;
