import * as React from 'react';
import {
  Appearance,
  ColorSchemeName,
  NativeEventSubscription,
} from 'react-native';
import {defaultThemesByVersion, ThemeProvider} from './theming';
import type {Theme, ThemeBase} from '../utils/types';

type ThemeProp = ThemeBase;

type Props = {
  children: React.ReactNode;
  theme?: ThemeProp;
};

const Provider = (props: Props) => {
  const isOnlyVersionInTheme =
    props.theme && Object.keys(props.theme).length === 1;

  const colorSchemeName =
    ((!props.theme || isOnlyVersionInTheme) && Appearance?.getColorScheme()) ||
    'light';

  const [colorSchemeState, setColorScheme] =
    React.useState<ColorSchemeName>(colorSchemeName);

  const handleAppearanceChange = (
    preferences: Appearance.AppearancePreferences,
  ) => {
    const {colorScheme} = preferences;
    setColorScheme(colorScheme);
  };

  React.useEffect(() => {
    let appearanceSubscription: NativeEventSubscription | undefined;
    if (!props.theme || isOnlyVersionInTheme) {
      appearanceSubscription = Appearance?.addChangeListener(
        handleAppearanceChange,
      ) as NativeEventSubscription | undefined;
    }
    return () => {
      if (!props.theme || isOnlyVersionInTheme) {
        if (appearanceSubscription) {
          appearanceSubscription.remove();
        } else {
          Appearance?.removeChangeListener(handleAppearanceChange);
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.theme]);

  const getTheme = () => {
    const scheme = colorSchemeState === 'dark';
    const defaultThemeBase = defaultThemesByVersion(scheme);

    const extendedThemeBase = {
      ...defaultThemeBase,
      ...(props.theme as ThemeBase),
    };

    return {
      ...extendedThemeBase,
    } as Theme;
  };

  const {children} = props;

  return <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>;
};

export default Provider;
