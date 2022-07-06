import {createTheming} from '@callstack/react-theme-provider';
import type {Theme} from '../utils/types';

import DarkTheme from '../theme/DarkTheme';
import LightTheme from '../theme/LightTheme';

export const {ThemeProvider, withTheme, useTheme} = createTheming<Theme>(
  LightTheme as Theme,
);

export const defaultThemesByVersion = (isDark = false) => {
  if (isDark) {
    return DarkTheme;
  }
  return LightTheme;
};
