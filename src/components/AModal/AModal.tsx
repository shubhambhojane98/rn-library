import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import IconSVG from '../../assets/svgs';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

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
  animationType?: any;
  transparentOverlay?: boolean;
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
  animationType,
  transparentOverlay,
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
      transparent
      animationType={animationType ? animationType : 'fade'}
      visible={visible}>
      <TouchableWithoutFeedback
        onPress={() => {
          onDismiss();
        }}>
        <View
          style={{
            ...stylesWithProp.modalOverlay,
            backgroundColor: transparentOverlay
              ? 'transparent'
              : colors.backgroundLayout,
          }}
        />
      </TouchableWithoutFeedback>
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
