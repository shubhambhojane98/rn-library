import React, {FC} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Props {
  percentage: string;
  completedColor?: string;
  backgroundColor?: string;
  height?: number;
  borderRadius?: number;
  theme: Theme;
}

const AProgressBar: FC<Props> = ({
  percentage,
  completedColor,
  backgroundColor,
  height,
  borderRadius,
}) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        height: height ? height : moderateScale(8, defaultScale),
        backgroundColor: backgroundColor ? backgroundColor : colors.lightgrey,
        borderRadius: borderRadius ? borderRadius : 0,
      }}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: percentage ? percentage : 0,
            backgroundColor: completedColor ? completedColor : colors.primary,
            borderRadius: borderRadius ? borderRadius : 0,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default withTheme(AProgressBar);
