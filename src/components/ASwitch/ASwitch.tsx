import React, {useEffect} from 'react';
import {Animated, Pressable, StyleSheet, I18nManager, View} from 'react-native';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface SwitchProps {
  onValueChange: () => void;
  switchSize: number;
  isActive: boolean;
  activeColor?: string;
  inActiveColor?: string;
  knobColor?: string;
  isDisabled: boolean;
  theme: Theme;
}

const ASwitch: React.FC<SwitchProps> = ({
  onValueChange,
  switchSize,
  isActive,
  activeColor,
  inActiveColor,
  knobColor,
  isDisabled = false,
}) => {
  const {colors} = useTheme();
  const trackWidth = React.useMemo(() => {
    return switchSize * 2;
  }, [switchSize]);
  const trackHeight = React.useMemo(() => {
    return switchSize;
  }, [switchSize]);
  const knobSize = React.useMemo(() => {
    return switchSize * 0.6;
  }, [switchSize]);

  const knobAnim = React.useRef(new Animated.Value(0)).current;
  const knobPos = I18nManager.isRTL
    ? isActive
      ? -trackWidth / 4
      : trackWidth / 4
    : isActive
    ? trackWidth / 4
    : -trackWidth / 4;

  const trackAnim = React.useRef(new Animated.Value(0)).current;
  const trackColor = isActive ? 75 : -75;

  const interpolatedColorAnimation = trackAnim.interpolate({
    inputRange: [-75, 75],
    outputRange: [
      (inActiveColor = inActiveColor || colors.white),
      (activeColor = activeColor || colors.primary),
    ],
  });

  useEffect(() => {
    Animated.parallel([
      Animated.spring(knobAnim, {
        toValue: knobPos,
        useNativeDriver: false,
      }),
      Animated.timing(trackAnim, {
        toValue: trackColor,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [isActive]);

  const handleSwitch = () => {
    if (isDisabled) {
      return;
    }
    onValueChange();
  };

  return (
    <Pressable onPress={handleSwitch} style={{width: switchSize}}>
      <View style={styles({switchSize}).container}>
        <Animated.View
          style={[
            styles({switchSize}).trackView,
            {
              width: trackWidth,
              height: trackHeight,
              borderRadius: trackHeight / 2,
              borderColor: isDisabled ? colors.greyOpac50 : colors.black,
              backgroundColor: isDisabled
                ? colors.greyOpac10
                : interpolatedColorAnimation,
            },
          ]}
        />
        <Animated.View
          style={[
            {
              width: switchSize,
              height: switchSize,
              borderRadius: switchSize / 2,
              transform: [{translateX: knobAnim}],
            },
            styles({switchSize}).knobContainer,
          ]}>
          <Animated.View
            style={{
              width: knobSize,
              height: knobSize,
              borderRadius: knobSize / 2,
              backgroundColor: isDisabled
                ? colors.greyOpac50
                : knobColor || colors.black,
            }}
          />
        </Animated.View>
      </View>
    </Pressable>
  );
};

export default withTheme(ASwitch);

const styles = (props: {switchSize: number}) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    trackView: {
      position: 'absolute',
      borderWidth: 1,
    },
    knobContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
