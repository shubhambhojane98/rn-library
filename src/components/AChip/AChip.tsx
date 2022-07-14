import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';
import ATypography from '../ATypography/ATypography';
import {TypographyVariant} from '../ATypography/ATypographyEnum';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';
import IconSVG from '../../assets/svgs';

interface Props {
  onPress: () => void;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  label: string;
  selectedBackgroundColor?: string;
  selectedTextColor?: string;
  textColor?: string;
  isDisabled?: boolean;
  iconHeight?: number;
  iconWidth?: number;
  rightIcon?: any;
  leftIcon?: any;
  theme: Theme;
}

const AChip: React.FC<Props> = ({
  label,
  onPress,
  selectedBackgroundColor,
  selectedTextColor,
  textColor,
  iconHeight,
  iconWidth,
  rightIcon,
  leftIcon,
  isDisabled = false,
  textStyle = {
    paddingHorizontal: moderateScale(16, defaultScale),
    paddingVertical: moderateScale(7, defaultScale),
    fontSize: moderateScale(14, defaultScale),
    lineHeight: moderateScale(17, defaultScale),
  },
}) => {
  const [isSelected, setChipSelected] = useState(false);

  const handleChip = () => {
    if (isDisabled) {
      return;
    }
    setChipSelected(!isSelected);
    onPress();
  };
  const {colors} = useTheme();
  const bgColor = selectedBackgroundColor
    ? selectedBackgroundColor
    : colors.primary;

  return (
    <TouchableOpacity
      onPress={handleChip}
      activeOpacity={isDisabled ? 0.5 : 1}
      style={{
        ...styles.viewStyle,
        opacity: isDisabled ? 0.5 : 1,
        backgroundColor: isSelected ? bgColor : colors.white,
        borderColor: isSelected ? bgColor : colors.lightgrey,
      }}>
      <IconSVG name={leftIcon} height={iconHeight} width={iconWidth} />
      <ATypography
        children={label}
        variant={TypographyVariant.SECONDARY_BOLD}
        color={
          isSelected
            ? selectedTextColor
              ? selectedTextColor
              : colors.white
            : textColor
            ? textColor
            : colors.black
        }
        fontSize={moderateScale(14, defaultScale)}
        style={textStyle}
      />
      <IconSVG name={rightIcon} height={iconHeight} width={iconWidth} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: moderateScale(1, defaultScale),
    borderRadius: moderateScale(49, defaultScale),
    alignSelf: 'center',
    marginHorizontal: moderateScale(5, defaultScale),
    paddingHorizontal: moderateScale(16, defaultScale),
    paddingVertical: moderateScale(4, defaultScale),
  },
});
export default withTheme(AChip);
