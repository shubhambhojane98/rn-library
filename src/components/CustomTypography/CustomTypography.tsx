//
import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface OwnProps {
  color?: string;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
}

const defaultFontSize = moderateScale(14, 0.2);

type Props = OwnProps & TextProps;
const CustomTypography: React.FC<Props> = ({
  color = '#000000',
  style,
  children,
  fontSize = defaultFontSize,
  ...otherProps
}) => {
  return (
    <Text style={{color: color, fontSize: fontSize}} {...otherProps}>
      {children}
    </Text>
  );
};

export default CustomTypography;

// interface CustomTypographyStyles {
//   primary?: StyleProp<TextStyle>;
//   primarySemiBold?: StyleProp<TextStyle>;
//   primaryBold?: StyleProp<TextStyle>;
//   secondary?: StyleProp<TextStyle>;
//   secondaryDemi?: StyleProp<TextStyle>;
//   secondaryBold?: StyleProp<TextStyle>;
// }

// const styles = (props: {fontSize: number}) =>
//   StyleSheet.create({
//     primary: {
//       fontFamily: `${fontFamilies.Fonts.primary}-Regular`,
//       fontSize: moderateScale(props.fontSize, defaultScale),
//       fontWeight: 'normal',
//     },
//     primarySemiBold: {
//       fontFamily: `${fontFamilies.Fonts.primary}-SemiBold`,
//       fontSize: moderateScale(props.fontSize, defaultScale),
//       fontWeight: '600',
//     },
//     primaryBold: {
//       fontFamily: `${fontFamilies.Fonts.primary}-Bold`,
//       fontSize: moderateScale(props.fontSize, defaultScale),
//       fontWeight: 'bold',
//     },
//     secondary: {
//       fontFamily: `${fontFamilies.Fonts.secondary}-Regular`,
//       fontSize: moderateScale(props.fontSize, defaultScale),
//       fontWeight: 'normal',
//     },
//     secondaryDemi: {
//       fontFamily: `${fontFamilies.Fonts.secondary}-Demi`,
//       fontSize: moderateScale(props.fontSize, defaultScale),
//       fontWeight: '600',
//     },
//     secondaryBold: {
//       fontFamily: `${fontFamilies.Fonts.secondary}-Bold`,
//       fontSize: moderateScale(props.fontSize, defaultScale),
//       fontWeight: 'bold',
//     },
//   });
