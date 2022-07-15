import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import IconSVG from '../../assets/svgs';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';
import Modal from 'react-native-modal';

interface Props {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  backgroundColor?: string;
  children: any;
  closeButton?: boolean;
  visible?: boolean;
  borderRadius?: number;
  onDismiss?: any;
  animationIn?: any;
  animationOut?: any;
  style?: any;
  backdropColor?: string;
  backdropOpacity?: number;
  hasBackdrop?: boolean;
  theme: Theme;
}

const defaultMargin = 20;

const AModal: React.FC<Props> = ({
  backgroundColor,
  children,
  closeButton,
  left = defaultMargin,
  right = defaultMargin,
  top = defaultMargin,
  bottom = defaultMargin,
  visible,
  borderRadius,
  onDismiss,
  animationIn,
  animationOut,
  style,
  backdropColor,
  backdropOpacity,
  hasBackdrop,
}) => {
  const {colors} = useTheme();
  const stylesWithProp = styles({
    top,
    right,
    bottom,
    left,
  });
  return (
    <Modal
      animationIn={animationIn ? animationIn : 'slideInUp'}
      animationOut={animationOut ? animationOut : 'slideOutDown'}
      style={style}
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity}
      hideModalContentWhileAnimating={true}
      hasBackdrop={hasBackdrop}
      onBackdropPress={() => {
        onDismiss();
      }}
      isVisible={visible}>
      <View
        style={{
          ...stylesWithProp.modalView,
          backgroundColor: backgroundColor || colors.background,
          borderRadius,
        }}>
        {closeButton ? (
          <TouchableOpacity
            onPress={() => {
              onDismiss();
            }}
            style={stylesWithProp.CloseBtn}>
            <IconSVG name={'close'} height={20} width={20} />
          </TouchableOpacity>
        ) : null}
        {children}
      </View>
    </Modal>
  );
};
const styles = (props: {
  top: number;
  right: number;
  bottom: number;
  left: number;
}) =>
  StyleSheet.create({
    modalView: {
      paddingTop: moderateScale(40, defaultScale),
      position: 'absolute',
      borderRadius: moderateScale(16, 0.1),
      alignItems: 'center',
      top: moderateScale(props.top || defaultMargin, defaultScale),
      right: moderateScale(props.right || defaultMargin, defaultScale),
      bottom: moderateScale(props.bottom || defaultMargin, defaultScale),
      left: moderateScale(props.left || defaultMargin, defaultScale),
    },
    CloseBtn: {
      right: 0,
      position: 'absolute',
      padding: moderateScale(20, defaultScale),
    },
    modalOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });
export default withTheme(AModal);
