import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ImageBackground,
  ImageStyle,
  Text,
} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../../theme';
import IconSVG from '../../assets/svgs';
import {fontFamilies} from '../../constants/fontFamilies';
import {defaultScale} from '../../utils/Common';
import ATypography from '../ATypography/ATypography';
import {TypographyVariant} from '../ATypography/ATypographyEnum';

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
  borderWidth?: number;
  borderColor?: string;
}
const AButton = (props: Props) => {
  const {
    title,
    onPress,
    backgroundColor,
    width,
    height,
    margin,
    fontFamily,
    fontSize,
    textAlign = 'center',
    sourceImage,
    padding,
    backgroundSource,
    color,
    borderRadius,
    imageStyle = {borderRadius, padding},
    iconName,
    iconHeight,
    iconWidth,
    fontWeight,
    textDecorationLine,
    hyperlink,
    borderWidth,
    borderColor,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        height,
        width,
        backgroundColor: hyperlink ? Color.background : backgroundColor,
        margin,
        borderRadius,
        borderWidth,
        borderColor,
      }}>
      {backgroundSource ? (
        <ImageBackground
          source={backgroundSource}
          resizeMode="cover"
          imageStyle={imageStyle}
          style={{
            ...styles.container,
            margin,
            flex: 1,
            height: '100%',
          }}
        />
      ) : null}

      {iconName ? (
        <IconSVG name={iconName} height={iconHeight} width={iconWidth} />
      ) : null}

      {!hyperlink && (
        <ATypography
          children={title}
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{
            ...styles.text,
            color,
            textAlign,
            fontFamily,
            fontSize,
            fontWeight,
            textDecorationLine,
          }}
        />
      )}
      {hyperlink && (
        <ATypography
          children={title}
          variant={TypographyVariant.SECONDARY_DEMI}
          style={{
            ...styles.hyperlinkText,
            textAlign,
            fontFamily,
            fontSize,
            fontWeight,
            textDecorationLine,
          }}
        />
      )}
      {sourceImage ? (
        <FastImage
          style={{...styles.container, height, width}}
          source={sourceImage ? sourceImage : 0}
          resizeMode={FastImage.resizeMode.contain}
        />
      ) : null}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: moderateScale(18, defaultScale),
    fontFamily: fontFamilies.Fonts.primary,
    padding: moderateScale(10, defaultScale),
  },
  hyperlinkText: {
    alignItems: 'center',
    fontSize: moderateScale(18, defaultScale),
    fontFamily: fontFamilies.Fonts.primary,
    padding: moderateScale(10, defaultScale),
    color: Color.blue,
  },
});
AButton.defaultProps = {
  color: Color.black,
  width: moderateScale(175, defaultScale),
  height: moderateScale(50, defaultScale),
  fontSize: moderateScale(18, defaultScale),
};
export default AButton;
