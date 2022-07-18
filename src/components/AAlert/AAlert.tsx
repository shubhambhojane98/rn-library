import React from 'react';
import {StyleSheet, View, Modal, Pressable} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import ATypography from '../../components/ATypography/ATypography';
import AButton from '../../components/AButton/AButton';
import {TypographyVariant} from '../ATypography/ATypographyEnum';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';
interface Props {
  visible: boolean;
  title: string;
  onPressYes: () => void;
  onDismiss: () => void;
  subTitle?: string;
  description?: string;
  titleColor?: string;
  animationType?: 'none' | 'fade' | 'slide';
  backgroundColor?: string;
  borderRadius?: number;
  yesButtonColor?: string;
  noButtonColor?: string;
  theme: Theme;
}

const AAlert: React.FC<Props> = ({
  backgroundColor,
  visible,
  borderRadius,
  animationType,
  title,
  titleColor,
  subTitle,
  description,
  onPressYes,
  onDismiss,
  yesButtonColor,
  noButtonColor,
}) => {
  const {colors} = useTheme();

  const stylesWithProp = styles({colors});
  return (
    <Modal
      transparent
      animationType={animationType ? animationType : 'fade'}
      visible={visible}>
      <Pressable style={stylesWithProp.modalOverlay} onPress={onDismiss} />
      <View
        style={{
          ...stylesWithProp.modalView,
          backgroundColor: backgroundColor || colors.background,
          borderRadius,
        }}>
        <ATypography
          fontSize={moderateScale(18, defaultScale)}
          variant={TypographyVariant.PRIMARY_BOLD}
          color={titleColor || colors.textColor}
          style={stylesWithProp.typography}>
          {title}
        </ATypography>
        {subTitle ? (
          <ATypography
            fontSize={moderateScale(16, defaultScale)}
            variant={TypographyVariant.PRIMARY_SEMI_BOLD}
            color={colors.textColor}
            style={stylesWithProp.typography}>
            {subTitle}
          </ATypography>
        ) : null}
        {description ? (
          <ATypography
            fontSize={moderateScale(14, defaultScale)}
            variant={TypographyVariant.SECONDARY_DEMI}
            color={colors.textColor}
            style={stylesWithProp.typography}>
            {description}
          </ATypography>
        ) : null}

        <View style={stylesWithProp.Button}>
          <AButton
            onPress={onPressYes}
            title={'Yes'}
            backgroundColor={yesButtonColor || colors.primary}
            borderRadius={moderateScale(49, defaultScale)}
            margin={moderateScale(10, defaultScale)}
            width={moderateScale(120, defaultScale)}
          />
          <AButton
            title={'No'}
            onPress={onDismiss}
            backgroundColor={noButtonColor || colors.greyOpac10}
            borderRadius={moderateScale(49, defaultScale)}
            margin={moderateScale(10, defaultScale)}
            width={moderateScale(120, defaultScale)}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = (props: {colors: any}) =>
  StyleSheet.create({
    modalView: {
      position: 'absolute',
      alignItems: 'center',
      borderRadius: moderateScale(16, defaultScale),
      top: moderateScale(56, defaultScale),
      left: moderateScale(25, defaultScale),
      right: moderateScale(25, defaultScale),
    },
    modalOverlay: {
      position: 'absolute',
      top: moderateScale(0, defaultScale),
      right: moderateScale(0, defaultScale),
      bottom: moderateScale(0, defaultScale),
      left: moderateScale(0, defaultScale),
      backgroundColor: props.colors.backgroundLayout,
    },
    typography: {
      textAlign: 'center',
      paddingTop: moderateScale(25, defaultScale),
      paddingHorizontal: moderateScale(25, defaultScale),
    },
    Button: {
      flex: 1,
      flexDirection: 'row',
      paddingVertical: moderateScale(20, defaultScale),
    },
  });
export default withTheme(AAlert);
