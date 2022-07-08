import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import AImage from '../AImage/AImage';
import ATypography from '../ATypography/ATypography';
import {TextAlignment, TypographyVariant} from '../ATypography/ATypographyEnum';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Prop {
  source?: object;
  sourceUri?: string;
  size?: number;
  backgroundColor?: string;
  resizeMode?: any;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  cache?: any;
  label?: string;
  textVariant?: TypographyVariant;
  fontSize?: number;
  borderRadius?: number;
  theme: Theme;
}

const defaultSize = 64;
const defaultMargin = 0;

const AAvatar: FC<Prop> = ({
  source,
  sourceUri,
  size,
  backgroundColor,
  resizeMode,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  cache,
  label,
  textVariant,
  fontSize,
  borderRadius,
}) => {
  const radiusValue =
    borderRadius !== undefined ? borderRadius : defaultSize / 2;

  const {colors} = useTheme();
  const bgColor = backgroundColor ? backgroundColor : colors.primary;

  const stylesWithProp = styles({colors});

  return (
    <>
      {label && (
        <ATypography
          children={label}
          textAlign={TextAlignment.Center}
          variant={textVariant}
          fontSize={fontSize}
          style={{
            ...stylesWithProp.labelStyle,
            lineHeight: size || defaultSize,
            width: size || defaultSize,
            height: size || defaultSize,
            borderRadius: radiusValue,
            backgroundColor: bgColor || colors.lightgrey,
            marginTop: moderateScale(marginTop || defaultMargin, defaultScale),
            marginRight: moderateScale(
              marginRight || defaultMargin,
              defaultScale,
            ),
            marginBottom: moderateScale(
              marginBottom || defaultMargin,
              defaultScale,
            ),
            marginLeft: moderateScale(
              marginLeft || defaultMargin,
              defaultScale,
            ),
          }}
        />
      )}
      {sourceUri && (
        <AImage
          sourceUri={sourceUri}
          width={size}
          height={size}
          backgroundColor={backgroundColor}
          resizeMode={resizeMode}
          marginTop={marginTop}
          marginRight={marginRight}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          cache={cache}
          borderRadius={radiusValue}
        />
      )}
      {source && (
        <AImage
          source={source}
          width={size}
          height={size}
          backgroundColor={backgroundColor}
          resizeMode={resizeMode}
          marginTop={marginTop}
          marginRight={marginRight}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          borderRadius={radiusValue}
        />
      )}
    </>
  );
};

const styles = (props: {colors: any}) =>
  StyleSheet.create({
    labelStyle: {
      overflow: 'hidden',
    },
  });

export default withTheme(AAvatar);
