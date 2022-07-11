import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Props {
  children: string | number;
  visible?: boolean;
  backgroundColor?: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: string;
  borderRadius?: number;
  size?: number;
  theme: Theme;
}
const defaultSize = moderateScale(20, defaultScale);
const ABadge: FC<Props> = ({
  visible = true,
  children,
  backgroundColor,
  top,
  right,
  left,
  bottom,
  color,
  size = defaultSize,
  borderRadius = size / 2,
}) => {
  const {colors} = useTheme();
  const bgColor = backgroundColor ? backgroundColor : colors.primary;

  const stylesWithProp = styles({colors});

  return (
    <>
      {visible ? (
        <Text
          numberOfLines={1}
          style={{
            ...stylesWithProp.container,
            backgroundColor: bgColor,
            color,
            top,
            right,
            left,
            bottom,
            borderRadius,
            fontSize: size * 0.5,
            lineHeight: size,
            height: size,
            minWidth: size,
          }}>
          {children}
        </Text>
      ) : null}
    </>
  );
};

const styles = (props: {colors: any}) =>
  StyleSheet.create({
    container: {
      textAlign: 'center',
      textAlignVertical: 'center',
      paddingHorizontal: moderateScale(4, defaultScale),
      overflow: 'hidden',
      position: 'absolute',
    },
  });
export default withTheme(ABadge);
