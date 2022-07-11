import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Props {
  children: any;
  height: number;
  width: number;
  borderRadius?: number;
  borderWidth?: number;
  shadowColor?: string;
  elevation?: number;
  borderColor?: string;
  shadowOffset?: {width: number; height: number};
  shadowOpacity?: number;
  shadowRadius?: number;
  theme: Theme;
}
const TCard: FC<Props> = ({
  height,
  width,
  borderRadius,
  borderWidth,
  shadowColor,
  borderColor,
  children,
  elevation,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
}) => {
  const {colors} = useTheme();
  const stylesWithProp = styles({colors});

  return (
    <View
      style={{
        ...stylesWithProp.container,
        height: moderateScale(height, defaultScale),
        width: moderateScale(width, defaultScale),
        borderRadius: borderRadius || 20,
        borderWidth: borderWidth || 0,
        borderColor: borderColor,
        elevation: elevation || 5,
        shadowColor,
        shadowOffset,
        shadowOpacity,
        shadowRadius,
      }}>
      {children}
    </View>
  );
};
const styles = (props: {colors: any}) =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      alignContent: 'center',
      margin: moderateScale(5, defaultScale),
      // shadowColor: 'black',
      shadowOffset: {
        width: -2,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  });

export default withTheme(TCard);
