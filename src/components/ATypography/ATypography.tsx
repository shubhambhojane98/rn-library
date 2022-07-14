import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fontFamilies} from '../../constants/fontFamilies';
import {TextAlignment, TypographyVariant} from './ATypographyEnum';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';
interface OwnProps {
  variant?: TypographyVariant;
  color?: string;
  style?: StyleProp<TextStyle>;
  textAlign?: TextAlignment;
  fontSize?: number;
  theme: Theme;
}

const defaultFontSize = moderateScale(14, defaultScale);

type Props = OwnProps & TextProps;
const Typography: React.FC<Props> = ({
  variant = TypographyVariant.PRIMARY,
  color,
  style,
  textAlign = TextAlignment.Left,
  children,
  fontSize = defaultFontSize,
  ...otherProps
}) => {
  const {colors} = useTheme();
  return (
    <Text
      style={[
        styles({
          fontSize,
        })[variant],
        {color: color ? color : colors.textColor},
        {textAlign},
        style,
      ]}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default withTheme(Typography);

const styles = (props: {fontSize: number}) =>
  StyleSheet.create({
    primary: {
      fontFamily: `${fontFamilies.Fonts.primary}-Regular`,
      fontSize: moderateScale(props.fontSize, defaultScale),
      fontWeight: 'normal',
    },
    primarySemiBold: {
      fontFamily: `${fontFamilies.Fonts.primary}-SemiBold`,
      fontSize: moderateScale(props.fontSize, defaultScale),
      fontWeight: '600',
    },
    primaryBold: {
      fontFamily: `${fontFamilies.Fonts.primary}-Bold`,
      fontSize: moderateScale(props.fontSize, defaultScale),
      fontWeight: 'bold',
    },
    secondary: {
      fontFamily: `${fontFamilies.Fonts.secondary}-Regular`,
      fontSize: moderateScale(props.fontSize, defaultScale),
      fontWeight: 'normal',
    },
    secondaryDemi: {
      fontFamily: `${fontFamilies.Fonts.secondary}-Demi`,
      fontSize: moderateScale(props.fontSize, defaultScale),
      fontWeight: '600',
    },
    secondaryBold: {
      fontFamily: `${fontFamilies.Fonts.secondary}-Bold`,
      fontSize: moderateScale(props.fontSize, defaultScale),
      fontWeight: 'bold',
    },
  });
