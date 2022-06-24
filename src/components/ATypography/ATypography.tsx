import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fontFamilies} from '../../constants/fontFamilies';
import {Color} from '../../theme';
import {TextAlignment} from './ATypographyEnum';
import {defaultScale} from '../../utils/Common';
interface OwnProps {
  variant?: keyof TypographyStyles;
  color?: string;
  style?: StyleProp<TextStyle>;
  textAlign?: TextAlignment;
  fontSize?: number;
}

const defaultFontSize = moderateScale(14, defaultScale);

type Props = OwnProps & TextProps;
const Typography: React.FC<Props> = ({
  variant = 'primary',
  color = Color.black,
  style,
  textAlign = TextAlignment.Left,
  children,
  fontSize = defaultFontSize,
  ...otherProps
}) => {
  return (
    <Text
      style={[styles({fontSize})[variant], {color}, {textAlign}, style]}
      {...otherProps}>
      {children}
    </Text>
  );
};

export default Typography;

interface TypographyStyles {
  primary?: StyleProp<TextStyle>;
  primarySemiBold?: StyleProp<TextStyle>;
  primaryBold?: StyleProp<TextStyle>;
  secondary?: StyleProp<TextStyle>;
  secondaryDemi?: StyleProp<TextStyle>;
  secondaryBold?: StyleProp<TextStyle>;
}

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
