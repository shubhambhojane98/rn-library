import React, {useEffect} from 'react';
import {Animated, Pressable, StyleSheet, I18nManager, View} from 'react-native';
import {Color} from '../../theme';

interface SwitchProps {
  onValueChange: () => void;
  switchSize: number;
  isActive: boolean;
  activeColor?: string;
  inActiveColor?: string;
  knobColor?: string;
  isDisabled: boolean;
}

const ASwitch: React.FC<SwitchProps> = ({
  onValueChange,
  switchSize,
  isActive,
  activeColor = Color.switchActiveBgColor,
  inActiveColor = Color.switchInActiveBgColor,
  knobColor = Color.switchKnobColor,
  isDisabled = false,
}) => {
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
    outputRange: [inActiveColor, activeColor],
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
              borderColor: isDisabled ? Color.greyOpac50 : Color.black,
              backgroundColor: isDisabled
                ? Color.greyOpac10
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
              backgroundColor: isDisabled ? Color.greyOpac50 : knobColor,
            }}
          />
        </Animated.View>
      </View>
    </Pressable>
  );
};

export default ASwitch;

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
