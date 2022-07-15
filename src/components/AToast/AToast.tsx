import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ATypography from '../../components/ATypography/ATypography';
import {TypographyVariant} from '../../components/ATypography/ATypographyEnum';
import IconSVG from '../../assets/svgs';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  label: string;
  duration?: number;
  iconName?: any;
  iconHeight?: number;
  iconWidth?: number;
  color?: string;
  backgroundColor?: string;
  theme: Theme;
}
const defaultSize = moderateScale(20, defaultScale);

const AToast: React.FC<Props> = ({
  visible,
  onDismiss,
  label,
  duration,
  iconName,
  iconHeight,
  iconWidth,
  color,
  backgroundColor,
}) => {
  const {colors} = useTheme();
  const opacity = useRef(new Animated.Value(0)).current;
  const [hidden, setHidden] = useState<boolean>(!visible);
  const hideTimeout = useRef<undefined>(undefined);

  React.useLayoutEffect(() => {
    if (visible) {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      setHidden(false);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) {
          if (finished) {
            setTimeout(onDismiss, duration);
          }
        }
      });
    } else {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) setHidden(true);
      });
    }
  }, [visible, duration, opacity, onDismiss]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.animatedView,
          opacity,
          backgroundColor: backgroundColor || colors.background,
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-20, 0],
              }),
            },
          ],
        }}>
        {iconName ? (
          <IconSVG
            name={iconName}
            height={moderateScale(iconHeight || defaultSize, defaultScale)}
            width={moderateScale(iconWidth || defaultSize, defaultScale)}
          />
        ) : null}
        <ATypography
          children={label}
          variant={TypographyVariant.SECONDARY}
          color={color || colors.textColor}
          style={styles.text}
        />
      </Animated.View>
    </View>
  );
};

export default withTheme(AToast);

const styles = StyleSheet.create({
  container: {
    bottom: moderateScale(20, defaultScale),
    position: 'absolute',
    zIndex: 1,
    left: moderateScale(10, defaultScale),
    right: moderateScale(10, defaultScale),
  },
  animatedView: {
    flexDirection: 'row',
    padding: moderateScale(10, defaultScale),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: moderateScale(4, defaultScale),
    height: moderateScale(64, defaultScale),
    width: moderateScale(320, defaultScale),
    alignSelf: 'center',
  },
  text: {
    paddingHorizontal: moderateScale(10, defaultScale),
  },
});
