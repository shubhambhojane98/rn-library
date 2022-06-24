import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import { TextAlignment } from './ATypographyEnum';
interface OwnProps {
    variant?: keyof TypographyStyles;
    color?: string;
    style?: StyleProp<TextStyle>;
    textAlign?: TextAlignment;
    fontSize?: number;
}
declare type Props = OwnProps & TextProps;
declare const Typography: React.FC<Props>;
export default Typography;
interface TypographyStyles {
    primary?: StyleProp<TextStyle>;
    primarySemiBold?: StyleProp<TextStyle>;
    primaryBold?: StyleProp<TextStyle>;
    secondary?: StyleProp<TextStyle>;
    secondaryDemi?: StyleProp<TextStyle>;
    secondaryBold?: StyleProp<TextStyle>;
}
