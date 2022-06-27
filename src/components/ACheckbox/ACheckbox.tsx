import React, {FC} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import IconSVG from '../../assets/svgs';
import {Color} from '../../theme';
import {CheckboxStatus} from './ACheckboxEnum';
import Typography from '../../components/ATypography/ATypography';
import {defaultScale} from '../../utils/Common';

interface CheckBoxProps {
  label?: string;
  status?: CheckboxStatus | string;
  onPress?: () => void;
}

const ACheckBox: FC<CheckBoxProps> = ({label, status, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <View style={styles.container}>
        {status === CheckboxStatus.Checked ? (
          <IconSVG name="CheckboxFilled" />
        ) : (
          <IconSVG name="CheckboxEmpty" />
        )}
        <Typography
          children={label}
          variant={'primary'}
          style={styles.checkboxLabel}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ACheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: moderateScale(16, defaultScale),
    color: Color.black,
    marginHorizontal: moderateScale(2, defaultScale),
  },
});
