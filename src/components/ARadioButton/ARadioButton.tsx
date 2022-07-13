import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import IconSVG from '../../assets/svgs';
import {Color} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import ATypography from '../ATypography/ATypography';
import {TypographyVariant} from '../ATypography/ATypographyEnum';

interface Prop {
  label: string;
  selected: boolean;
  disable?: boolean;
}

const ARadioButton: FC<Prop> = ({selected, label, disable}) => {
  return (
    <View style={disable ? styles.containerDisabled : styles.container}>
      {selected ? (
        <IconSVG height={20} name="selectedradio" />
      ) : (
        <IconSVG height={20} name="unselectedradio" />
      )}
      <ATypography
        children={label}
        variant={TypographyVariant.PRIMARY}
        style={styles.radioButtonLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: moderateScale(5, defaultScale),
  },
  containerDisabled: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: moderateScale(5, defaultScale),
    opacity: 0.5,
  },
  radioButtonLabel: {
    fontSize: moderateScale(16, defaultScale),
    marginHorizontal: moderateScale(5, defaultScale),
  },
});

export default ARadioButton;
