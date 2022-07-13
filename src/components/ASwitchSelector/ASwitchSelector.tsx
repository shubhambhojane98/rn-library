import React, {FC, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ATypography from '../ATypography/ATypography';
import {defaultScale} from '../../utils/Common';
import {TypographyVariant} from '../ATypography/ATypographyEnum';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Props {
  option1: string;
  option2: string;
  onSelectSwitch: any;
  width?: number;
  theme: Theme;
}

const ASwitchSelector: FC<Props> = ({
  option1,
  option2,
  onSelectSwitch,
  width,
}) => {
  const {colors} = useTheme();
  const [getSelectionMode, setSelectionMode] = useState(2);
  const stylesWithProp = styles({colors});
  const toggleSwitch = (val: any) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={{...stylesWithProp.switchContainer, width: width}}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => toggleSwitch(1)}
        style={{
          ...stylesWithProp.switchBtn,
          backgroundColor:
            getSelectionMode === 1 ? colors.primary : colors.lightgrey,
        }}>
        <ATypography
          children={option1}
          fontSize={16}
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{...stylesWithProp.text}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => toggleSwitch(2)}
        style={{
          ...stylesWithProp.switchBtn,
          backgroundColor:
            getSelectionMode === 2 ? colors.primary : colors.lightgrey,
        }}>
        <ATypography
          children={option2}
          fontSize={16}
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{...stylesWithProp.text}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = (props: {colors: any}) =>
  StyleSheet.create({
    switchContainer: {
      height: moderateScale(52, defaultScale),
      backgroundColor: props.colors.lightgrey,
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
      color: props.colors.black,
    },
  });

export default withTheme(ASwitchSelector);
