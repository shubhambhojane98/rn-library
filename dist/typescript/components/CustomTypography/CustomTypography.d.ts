import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
interface OwnProps {
    color?: string;
    style?: StyleProp<TextStyle>;
    fontSize?: number;
}
declare type Props = OwnProps & TextProps;
declare const CustomTypography: React.FC<Props>;
export default CustomTypography;
