import React, {FC, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../../theme';
import ATypography from '../ATypography/ATypography';
import {defaultScale} from '../../utils/Common';

interface Props {
  option1: string;
  option2: string;
  onSelectSwitch: any;
  width?: number;
}

const ASwitchSelector: FC<Props> = ({
  option1,
  option2,
  onSelectSwitch,
  width,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(2);

  const toggleSwitch = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={{...styles.switchContainer, width: width}}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => toggleSwitch(1)}
        style={{
          ...styles.switchBtn,
          backgroundColor:
            getSelectionMode === 1 ? Color.yellow : Color.switchBackgroundColor,
        }}>
        <ATypography
          children={option1}
          fontSize={16}
          variant={'primaryBold'}
          style={{...styles.text}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => toggleSwitch(2)}
        style={{
          ...styles.switchBtn,
          backgroundColor:
            getSelectionMode === 2 ? Color.yellow : Color.switchBackgroundColor,
        }}>
        <ATypography
          children={option2}
          fontSize={16}
          variant={'primaryBold'}
          style={{...styles.text}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    height: moderateScale(52, defaultScale),
    backgroundColor: Color.switchBackgroundColor,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: moderateScale(2, defaultScale),
  },
  switchBtn: {
    flex: 1,
    margin: moderateScale(5, defaultScale),
    width: moderateScale(109, defaultScale),
    height: moderateScale(40, defaultScale),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Color.textColor,
  },
});

export default ASwitchSelector;
