import { StyleProp, TextStyle, ImageStyle } from 'react-native';
import { Source } from 'react-native-fast-image';
interface Props {
    backgroundColor?: string;
    width: number;
    height: number;
    title?: string;
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
}
declare const AButton: {
    (props: Props): JSX.Element;
    defaultProps: {
        color: string;
        width: number;
        height: number;
        fontSize: number;
    };
};
export default AButton;
