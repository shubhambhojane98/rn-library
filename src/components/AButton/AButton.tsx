import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ImageBackground,
  ImageStyle,
  ActivityIndicator,
} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import IconSVG from '../../assets/svgs';
import {fontFamilies} from '../../constants/fontFamilies';
import {defaultScale} from '../../utils/Common';
import ATypography from '../ATypography/ATypography';
import {TypographyVariant} from '../ATypography/ATypographyEnum';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

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
    isDisabled = false,
    isLoading = false,
  } = props;

  const {colors} = useTheme();
  const bgColor = backgroundColor ? backgroundColor : colors.primary;

  const stylesWithProp = styles({colors});

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={{
        ...stylesWithProp.container,
        backgroundColor: hyperlink
          ? colors.transparent
          : isDisabled
          ? colors.lightgrey
          : bgColor,
        height: moderateScale(height || 50, defaultScale),
        width: moderateScale(width || 175, defaultScale),
        margin: moderateScale(margin || 2, defaultScale),
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
            ...stylesWithProp.container,
            margin,
            flex: 1,
            height: '100%',
          }}
        />
      ) : null}

      {iconName ? (
        <IconSVG name={iconName} height={iconHeight} width={iconWidth} />
      ) : null}

      {!hyperlink && !backgroundSource && (
        <ATypography
          children={title}
          variant={TypographyVariant.PRIMARY_BOLD}
          color={
            color ? color : isDisabled ? colors.greyOpac50 : colors.textColor
          }
          style={{
            ...stylesWithProp.text,
            textAlign,
            fontFamily,
            fontSize: fontSize || 18,
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
            ...stylesWithProp.hyperlinkText,
            textAlign,
            fontFamily,
            fontSize,
            fontWeight,
            textDecorationLine,
            backgroundColor,
          }}
        />
      )}
      {sourceImage ? (
        <FastImage
          style={{
            ...stylesWithProp.fastImage,
            height: moderateScale(height || 50, defaultScale),
            width: moderateScale(width || 175, defaultScale),
          }}
          source={sourceImage ? sourceImage : 0}
          resizeMode={FastImage.resizeMode.contain}
        />
      ) : null}
      {isLoading ? <ActivityIndicator size={'small'} /> : null}
    </TouchableOpacity>
  );
};
const styles = (props: {colors: any}) =>
  StyleSheet.create({
    container: {
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
      color: props.colors.linkColor,
    },
    fastImage: {
      flex: 1,
    },
  });
export default withTheme(AButton);
