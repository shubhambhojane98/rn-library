import React, {FC} from 'react';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Prop {
  source?: object;
  sourceUri?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  resizeMode?: any;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  cache?: any;
  borderRadius?: number;
  theme: Theme;
}

const defaultSize = 64;
const defaultRadius = 0;
const defaultMargin = 0;

const AImage: FC<Prop> = ({
  source,
  sourceUri,
  width,
  height,
  backgroundColor,
  resizeMode,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  cache,
  borderRadius,
}) => {
  const {colors} = useTheme();
  return (
    <>
      {sourceUri && (
        <FastImage
          style={{
            width: moderateScale(width || defaultSize, defaultScale),
            height: moderateScale(height || defaultSize, defaultScale),
            backgroundColor: backgroundColor || colors.transparent,
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
            borderRadius: borderRadius || defaultRadius / 2,
          }}
          source={{
            uri: sourceUri,
            priority: FastImage.priority.normal,
            cache: cache,
          }}
          resizeMode={resizeMode}
        />
      )}
      {source && (
        <Image
          source={source}
          style={{
            width: moderateScale(width || defaultSize, defaultScale),
            height: moderateScale(height || defaultSize, defaultScale),
            backgroundColor: backgroundColor || colors.transparent,
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
            borderRadius: borderRadius || defaultRadius / 2,
          }}
          resizeMode={resizeMode}
        />
      )}
    </>
  );
};

export default withTheme(AImage);
