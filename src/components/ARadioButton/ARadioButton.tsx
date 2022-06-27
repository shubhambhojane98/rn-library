import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import IconSVG from '../../assets/svgs';
import {Color} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import ATypography from '../ATypography/ATypography';

interface Prop {
  label: string;
  selected: boolean;
}

const ARadioButton: FC<Prop> = ({selected, label}) => {
  return (
    <View style={styles.container}>
      {selected ? (
        <IconSVG height={20} name="selectedradio" />
      ) : (
        <IconSVG height={20} name="unselectedradio" />
      )}
      <ATypography
        children={label}
        variant={'primary'}
        style={styles.radioButtonLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonLabel: {
    fontSize: moderateScale(16, defaultScale),
    color: Color.black,
    marginHorizontal: moderateScale(5, defaultScale),
  },
});

export default ARadioButton;
