import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import IconSVG from '../../assets/svgs';
import {Color} from '../../theme';
import {CheckboxStatus} from './ACheckboxEnum';
import Typography from '../../components/ATypography/ATypography';
import {defaultScale} from '../../utils/Common';
import {TypographyVariant} from '../../components/ATypography/ATypographyEnum';

interface CheckBoxProps {
  label?: string;
  status?: CheckboxStatus | string;
  onPress?: () => void;
  disable?: boolean;
}

const ACheckBox: FC<CheckBoxProps> = ({
  label,
  status,
  onPress,
  disable = false,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={disable ? () => {} : onPress}
        activeOpacity={1}>
        <View style={disable ? styles.containerDisabled : styles.container}>
          {status === CheckboxStatus.Checked ? (
            <IconSVG name="checkboxfilled" />
          ) : (
            <IconSVG name="checkboxempty" />
          )}
          <Typography
            children={label}
            variant={TypographyVariant.PRIMARY}
            style={styles.checkboxLabel}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ACheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDisabled: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.5,
  },
  checkboxLabel: {
    fontSize: moderateScale(16, defaultScale),
    color: Color.black,
    marginHorizontal: moderateScale(2, defaultScale),
  },
});
