import React from 'react';
import {StyleSheet, View, Modal, Pressable} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../../theme';
import {defaultScale} from '../../utils/Common';
import ATypography from '../../components/ATypography/ATypography';
import AButton from '../../components/AButton/AButton';
import {TypographyVariant} from '../ATypography/ATypographyEnum';
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
}

const TAlert: React.FC<Props> = ({
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
}) => {
  return (
    <Modal
      transparent
      animationType={animationType ? animationType : 'fade'}
      visible={visible}>
      <Pressable style={styles.modalOverlay} onPress={onDismiss} />
      <View
        style={{
          ...styles.modalView,
          backgroundColor,
          borderRadius,
        }}>
        <ATypography
          fontSize={moderateScale(18, defaultScale)}
          variant={TypographyVariant.PRIMARY_BOLD}
          color={titleColor ? titleColor : Color.red}
          style={styles.typography}>
          {title}
        </ATypography>
        {subTitle ? (
          <ATypography
            fontSize={moderateScale(16, defaultScale)}
            variant={TypographyVariant.PRIMARY_SEMI_BOLD}
            color={Color.black}
            style={styles.typography}>
            {subTitle}
          </ATypography>
        ) : null}
        {description ? (
          <ATypography
            fontSize={moderateScale(14, defaultScale)}
            variant={TypographyVariant.SECONDARY_DEMI}
            color={Color.grey}
            style={styles.typography}>
            {description}
          </ATypography>
        ) : null}

        <View style={styles.Button}>
          <AButton
            onPress={onPressYes}
            title={'Yes'}
            backgroundColor={Color.yellow}
            borderRadius={moderateScale(49, defaultScale)}
            margin={moderateScale(10, defaultScale)}
            width={moderateScale(120, defaultScale)}
          />
          <AButton
            title={'No'}
            onPress={onDismiss}
            borderRadius={moderateScale(49, defaultScale)}
            borderWidth={moderateScale(1, defaultScale)}
            borderColor={Color.black}
            margin={moderateScale(10, defaultScale)}
            width={moderateScale(120, defaultScale)}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
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
    backgroundColor: Color.blackOpac80,
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
TAlert.defaultProps = {
  backgroundColor: Color.white,
};
export default TAlert;
