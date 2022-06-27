import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../../theme';
import {defaultScale} from '../../utils/Common';

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
}
const defaultSize = moderateScale(20, defaultScale);
const ABadge: FC<Props> = ({
  visible = true,
  children,
  backgroundColor = Color.red,
  top,
  right,
  left,
  bottom,
  color,
  size = defaultSize,
  borderRadius = size / 2,
}) => {
  return (
    <>
      {visible ? (
        <Text
          numberOfLines={1}
          style={{
            ...styles.container,
            backgroundColor,
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

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: moderateScale(4, defaultScale),
    overflow: 'hidden',
    position: 'absolute',
  },
});
export default ABadge;
