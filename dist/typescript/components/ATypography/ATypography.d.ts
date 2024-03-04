import React from 'react';
import { StyleProp, TextProps, TextStyle } from 'react-native';
import { TextAlignment, TypographyVariant } from './ATypographyEnum';
import type { Theme } from '../../utils/types';
interface OwnProps {
    variant?: TypographyVariant;
    color?: string;
    style?: StyleProp<TextStyle>;
    textAlign?: TextAlignment;
    fontSize?: number;
    theme: Theme;
}
declare type Props = OwnProps & TextProps;
declare const _default: React.ComponentType<Pick<Props, "style" | "variant" | "color" | "textAlign" | "children" | "fontSize" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onTextLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../utils/types").ThemeBase> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & React.FC<Props>, {}>;
export default _default;
