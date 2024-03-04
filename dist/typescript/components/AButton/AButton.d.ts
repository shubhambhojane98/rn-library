import React from 'react';
import { StyleProp, TextStyle, ImageStyle } from 'react-native';
import { Source } from 'react-native-fast-image';
import type { Theme } from '../../utils/types';
interface Props {
    backgroundColor?: string;
    width: number;
    height?: number;
    title: string;
    onPress: () => void;
    borderRadius?: number;
    margin?: number;
    imageStyle?: StyleProp<ImageStyle>;
    backgroundSource?: any;
    padding?: number;
    iconName?: any;
    iconHeight?: number;
    iconWidth?: number;
    sourceImage?: number | Source;
    color?: any;
    fontFamily?: string;
    fontSize?: number;
    disabled?: boolean;
    textStyle?: StyleProp<TextStyle>;
    textAlign?: any;
    fontWeight?: any;
    textDecorationLine?: any;
    hyperlink?: boolean;
    borderWidth?: number;
    borderColor?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    theme: Theme;
}
declare const _default: React.ComponentType<Pick<Props, "title" | "width" | "color" | "textAlign" | "fontSize" | "onPress" | "fontWeight" | "fontFamily" | "textDecorationLine" | "backgroundColor" | "borderColor" | "borderRadius" | "borderWidth" | "height" | "margin" | "padding" | "imageStyle" | "backgroundSource" | "iconName" | "iconHeight" | "iconWidth" | "sourceImage" | "disabled" | "textStyle" | "hyperlink" | "isLoading" | "isDisabled"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../utils/types").ThemeBase> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & ((props: Props) => JSX.Element), {}>;
export default _default;
