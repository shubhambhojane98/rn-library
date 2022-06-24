import {Appearance} from 'react-native';

interface colors {
  yellow: string;
  black: string;
  red: string;
  violet: string;
  taupe: string;
  beige: string;
  grey: string;
  lightgrey: string;
  blue: string;
  darkGrey: string;
  white: string;
  transportation: string;
  logistic: string;
  environment: string;
  sports: string;
  healthcare: string;
  background: string;
  textColor: string;
  placeholderTextColor: string;
  switchBackgroundColor: string;
  paginationDotColor: string;
  paginationDotBgColor: string;
  blackOpac80: string;
  blackOpac60: string;
  blackOpac40: string;
  blackOpac20: string;
  greyOpac80: string;
  greyOpac60: string;
  greyOpac50: string;
  greyOpac40: string;
  greyOpac20: string;
  greyOpac10: string;
  switchActiveBgColor: string;
  switchInActiveBgColor: string;
  switchKnobColor: string;
}

const primaryColors = {
  yellow: '#FAD000',
  black: '#231F20',
  red: '#A81E23',
  violet: '#533467',
  taupe: '#695958',
  beige: '#C3B59F',
  grey: '#353535',
  white: '#fff',
  lightgrey: '#D7D7D7',
  blue: '#007BC1',
  darkGrey: 'rgba(0, 0, 0, 0.2)',
};

const opacColors = {
  blackOpac80: 'rgba(0, 0, 0, 0.8)',
  blackOpac60: 'rgba(0, 0, 0, 0.6)',
  blackOpac40: 'rgba(0, 0, 0, 0.4)',
  blackOpac20: 'rgba(0, 0, 0, 0.2)',
  greyOpac80: 'rgba(53, 53, 53, 0.8)',
  greyOpac60: 'rgba(53, 53, 53, 0.6)',
  greyOpac50: 'rgba(53, 53, 53, 0.5)',
  greyOpac40: 'rgba(53, 53, 53, 0.4)',
  greyOpac20: 'rgba(53, 53, 53, 0.2)',
  greyOpac10: 'rgba(53, 53, 53, 0.1)',
};

const categoryColors = {
  transportation: '#007BC1',
  logistic: '#EF4065',
  environment: '#009A46',
  sports: '#F26524',
  healthcare: '#00ABBE',
};

let themeColors: colors;

const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  // Use dark color scheme
  themeColors = {
    ...primaryColors,
    ...categoryColors,
    ...opacColors,
    background: primaryColors.black,
    textColor: primaryColors.white,
    placeholderTextColor: '#5D5D5D',
    switchBackgroundColor: primaryColors.white,
    paginationDotColor: primaryColors.white,
    paginationDotBgColor: primaryColors.darkGrey,
    switchActiveBgColor: primaryColors.yellow,
    switchInActiveBgColor: primaryColors.white,
    switchKnobColor: primaryColors.black,
  };
} else {
  // Use light color scheme
  themeColors = {
    ...primaryColors,
    ...categoryColors,
    ...opacColors,
    background: primaryColors.yellow,
    textColor: primaryColors.black,
    placeholderTextColor: '#5D5D5D',
    switchBackgroundColor: primaryColors.lightgrey,
    paginationDotColor: primaryColors.white,
    paginationDotBgColor: primaryColors.darkGrey,
    switchActiveBgColor: primaryColors.yellow,
    switchInActiveBgColor: primaryColors.white,
    switchKnobColor: primaryColors.black,
  };
}

export default themeColors;
