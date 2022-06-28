import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import { TextAlignment, TypographyVariant } from './ATypographyEnum';
interface OwnProps {
    variant?: TypographyVariant;
    color?: string;
    style?: StyleProp<TextStyle>;
    textAlign?: TextAlignment;
    fontSize?: number;
}
declare type Props = OwnProps & TextProps;
declare const Typography: React.FC<Props>;
export default Typography;
