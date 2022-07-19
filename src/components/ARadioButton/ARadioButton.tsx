import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import IconSVG from '../../assets/svgs';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import ATypography from '../ATypography/ATypography';
import {TypographyVariant} from '../ATypography/ATypographyEnum';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Prop {
  label: string;
  selected: boolean;
  disable?: boolean;
  selectedRadio?: (props: {size: number}) => React.ReactNode;
  unselectedRadio?: (props: {size: number}) => React.ReactNode;
  boxStyle?: StyleProp<ViewStyle>;
  selectedIconColor?: string;
  unselectedIconColor?: string;
  theme: Theme;
}
const BOX_SIZE = moderateScale(20, defaultScale);
const ARadioButton: FC<Prop> = ({
  selected,
  label,
  disable,
  selectedRadio,
  unselectedRadio,
  boxStyle,
  selectedIconColor,
  unselectedIconColor,
}) => {
  const {colors} = useTheme();
  const stylesWithProp = styles({colors});
  return (
    <View
      style={
        disable ? stylesWithProp.containerDisabled : stylesWithProp.container
      }>
      {selected ? (
        selectedRadio ? (
          <View style={[stylesWithProp.box, boxStyle]}>
            {selectedRadio({
              size: BOX_SIZE,
            })}
          </View>
        ) : (
          <IconSVG height={20} name="selectedradio" fill={selectedIconColor} />
        )
      ) : unselectedRadio ? (
        <View style={[stylesWithProp.box, boxStyle]}>
          {unselectedRadio({
            size: BOX_SIZE,
          })}
        </View>
      ) : (
        <IconSVG
          height={20}
          name="unselectedradio"
          fill={unselectedIconColor}
        />
      )}
      <ATypography
        children={label}
        variant={TypographyVariant.PRIMARY}
        style={stylesWithProp.radioButtonLabel}
      />
    </View>
  );
};

const styles = (props: {colors: any}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: moderateScale(5, defaultScale),
      backgroundColor: props.colors.background,
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
    box: {
      justifyContent: 'center',
      marginHorizontal: moderateScale(8, defaultScale),
      height: BOX_SIZE,
      width: BOX_SIZE,
    },
  });

export default withTheme(ARadioButton);
