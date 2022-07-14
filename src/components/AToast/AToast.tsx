import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ATypography from '../../components/ATypography/ATypography';
import {TypographyVariant} from '../../components/ATypography/ATypographyEnum';
import IconSVG from '../../assets/svgs';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Props {
  label: string;
  toastTime?: number;
  iconName?: any;
  iconHeight?: number;
  iconWidth?: number;
  color?: string;
  backgroundColor?: string;
  theme: Theme;
}
const defaultSize = moderateScale(20, defaultScale);

const AToast: React.FC<Props> = ({
  label,
  toastTime,
  iconName,
  iconHeight,
  iconWidth,
  color,
  backgroundColor,
}) => {
  const {colors} = useTheme();
  const opacity = useRef(new Animated.Value(0)).current;

  const stylesWithProp = styles({colors});

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(toastTime ? toastTime : 2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={stylesWithProp.container}>
      <Animated.View
        style={{
          ...stylesWithProp.animatedView,
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
          style={stylesWithProp.text}
        />
      </Animated.View>
    </View>
  );
};

export default withTheme(AToast);

const styles = (props: {colors: any}) =>
  StyleSheet.create({
    container: {
      bottom: moderateScale(20, defaultScale),
      position: 'absolute',
      zIndex: 1,
      left: moderateScale(10, defaultScale),
      right: moderateScale(10, defaultScale),
      shadowColor: props.colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: defaultScale,
      shadowRadius: 3,
      elevation: 3,
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
