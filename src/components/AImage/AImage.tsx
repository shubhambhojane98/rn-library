import React, {FC} from 'react';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Color} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';

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
}

const defaultSize = 64;
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
}) => {
  return (
    <>
      {sourceUri && (
        <FastImage
          style={{
            width: moderateScale(width || defaultSize, defaultScale),
            height: moderateScale(height || defaultSize, defaultScale),
            backgroundColor: backgroundColor || Color.transparent,
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
            backgroundColor: backgroundColor || Color.transparent,
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
          resizeMode={resizeMode}
        />
      )}
    </>
  );
};

export default AImage;
