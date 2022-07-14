import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  I18nManager,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import IconSVG from '../../assets/svgs';
import {TextAlignVertical, AutoCapitalize} from './ATextInputEnum';
import ATypography from '../ATypography/ATypography';
import MaskInput from 'react-native-mask-input';
import {TypographyVariant} from '../ATypography/ATypographyEnum';
import {defaultScale} from '../../utils/Common';
import {withTheme, useTheme} from '../../core/theming';
import type {Theme} from '../../utils/types';

interface Props {
  placeholder?: string;
  placeholderTextColor?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  underlineColorAndroid?: string;
  borderColor?: string;
  value?: string | any | undefined;
  autoFocus?: boolean;
  keyboardType?: KeyboardTypeOptions;
  textContentType?: string | any;
  onChangeText?: (Name: any, masked?: any, unmasked?: any) => void;
  autoCorrect?: boolean;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  textAlignVertical?: TextAlignVertical;
  onSubmitEditing?: (event: any) => void;
  error?: boolean;
  errorText?: string;
  multiline?: boolean;
  noExteriorView?: boolean;
  secureTextEntry?: boolean;
  autoCapitalize?: AutoCapitalize;
  maxLength?: number | undefined;
  onEndEditing?: any;
  selectionColor?: any;
  isPassword?: any;
  width?: any;
  disable?: boolean;
  iconHeight?: number;
  iconWidth?: number;
  editable?: boolean;
  rightIcon?: any;
  leftIcon?: any;
  isTopText?: boolean;
  showObfuscatedValue?: boolean;
  placeholderFillCharacter?: string;
  obfuscationCharacter?: string;
  mask?: any;
  theme: Theme;
}

const defaultSize = 20;
const defaultMargin = 5;

const ATextInput = React.forwardRef<TextInput, Props>(
  (
    {
      placeholder,
      placeholderTextColor,
      marginTop = defaultMargin,
      marginBottom = defaultMargin,
      marginLeft = defaultMargin,
      marginRight = defaultMargin,
      borderColor,
      value,
      underlineColorAndroid,
      autoFocus,
      keyboardType,
      textContentType,
      onChangeText,
      autoCorrect,
      returnKeyType,
      iconHeight = defaultSize,
      iconWidth = defaultSize,
      textAlignVertical,
      editable,
      onSubmitEditing,
      multiline,
      errorText,
      autoCapitalize,
      maxLength,
      isPassword,
      onEndEditing,
      selectionColor,
      secureTextEntry,
      width,
      rightIcon,
      leftIcon,
      disable,
      showObfuscatedValue,
      obfuscationCharacter,
      placeholderFillCharacter,
      mask,
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [securePassword, setSecurePassword] = useState(secureTextEntry);

    const onFocus = () => {
      setIsFocused(true);
    };

    const onBlur = () => {
      setIsFocused(false);
    };
    const handlePassword = () => {
      setVisible(!visible);
      setSecurePassword(!securePassword);
    };

    const {colors} = useTheme();

    const stylesWithProp = styles({colors});

    return (
      <View>
        <View>
          {disable && (
            <View
              style={{
                ...stylesWithProp.disableTextInputContainer,
                width: width,
                marginTop: moderateScale(marginTop),
                marginBottom: moderateScale(marginBottom),
                marginLeft: moderateScale(marginLeft),
                marginRight: moderateScale(marginRight),
              }}>
              <TextInput
                style={stylesWithProp.disableTextinput}
                placeholder={placeholder}
                editable={false}
                placeholderTextColor={placeholderTextColor || colors.lightgrey}
              />
              {rightIcon ? (
                <View style={stylesWithProp.icon}>
                  <IconSVG
                    name={rightIcon}
                    height={iconHeight}
                    width={iconWidth}
                  />
                </View>
              ) : null}
            </View>
          )}

          {!mask && !disable && (
            <View
              style={[
                stylesWithProp.textinputContainer,
                isFocused && {
                  ...stylesWithProp.shadow,
                  borderColor: colors.black,
                },
                !isFocused && {
                  borderColor: errorText ? colors.error : borderColor,
                },
                {
                  marginTop: moderateScale(marginTop),
                  marginBottom: moderateScale(marginBottom),
                  marginLeft: moderateScale(marginLeft),
                  marginRight: moderateScale(marginRight),
                  width: width,
                },
              ]}>
              {!isPassword && leftIcon && (
                <View style={stylesWithProp.lefticon}>
                  <IconSVG
                    height={moderateScale(iconHeight)}
                    width={moderateScale(iconWidth)}
                    name={leftIcon}
                  />
                </View>
              )}
              <TextInput
                style={stylesWithProp.textinput}
                placeholder={placeholder}
                onChangeText={onChangeText}
                editable={editable}
                ref={ref}
                autoCorrect={autoCorrect}
                placeholderTextColor={placeholderTextColor || colors.lightgrey}
                value={value}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
                textContentType={textContentType}
                underlineColorAndroid={underlineColorAndroid}
                textAlignVertical={textAlignVertical}
                returnKeyType={returnKeyType}
                secureTextEntry={securePassword}
                autoCapitalize={autoCapitalize}
                multiline={multiline}
                onSubmitEditing={onSubmitEditing}
                onEndEditing={onEndEditing}
                onFocus={onFocus}
                onBlur={onBlur}
                maxLength={maxLength}
                selectionColor={selectionColor}
              />
              {isPassword && (
                <View style={stylesWithProp.icon}>
                  <IconSVG
                    height={iconHeight}
                    width={iconWidth}
                    onPress={handlePassword}
                    name={visible ? 'showpassword' : 'hidepassword'}
                  />
                </View>
              )}
              {!isPassword && rightIcon && (
                <View style={stylesWithProp.icon}>
                  <IconSVG
                    height={moderateScale(iconHeight)}
                    width={moderateScale(iconWidth)}
                    name={rightIcon}
                  />
                </View>
              )}
            </View>
          )}
          {mask && (
            <View
              style={[
                stylesWithProp.textinputContainer,
                isFocused && {
                  ...stylesWithProp.shadow,
                  borderColor: colors.black,
                },
                !isFocused && {
                  borderColor: errorText ? colors.error : borderColor,
                },
                {
                  marginTop: moderateScale(marginTop),
                  marginBottom: moderateScale(marginBottom),
                  marginLeft: moderateScale(marginLeft),
                  marginRight: moderateScale(marginRight),
                  width: width,
                },
              ]}>
              <MaskInput
                placeholder={placeholder}
                style={stylesWithProp.textinput}
                value={value}
                ref={ref}
                showObfuscatedValue={showObfuscatedValue}
                obfuscationCharacter={obfuscationCharacter}
                placeholderFillCharacter={placeholderFillCharacter}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                onEndEditing={onEndEditing}
                onFocus={onFocus}
                onBlur={onBlur}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                autoCapitalize={autoCapitalize}
                textAlignVertical={textAlignVertical}
                mask={mask}
              />
            </View>
          )}
        </View>
        <View
          style={{
            marginLeft: moderateScale(marginLeft),
            marginRight: moderateScale(marginRight),
          }}>
          {errorText && !disable && !isFocused ? (
            <ATypography
              children={errorText}
              variant={TypographyVariant.PRIMARY}
              color={colors.error}
              fontSize={14}
            />
          ) : null}
        </View>
      </View>
    );
  },
);

const styles = (props: {colors: any}) =>
  StyleSheet.create({
    textinputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 2,
      borderWidth: 1,
      backgroundColor: props.colors.white,
    },
    icon: {
      paddingRight: moderateScale(15, defaultScale),
      paddingLeft: moderateScale(5, defaultScale),
    },
    lefticon: {
      paddingRight: moderateScale(5, defaultScale),
      paddingLeft: moderateScale(15, defaultScale),
    },
    textinput: {
      flex: 1,
      height: moderateScale(48, defaultScale),
      textAlign: I18nManager.isRTL ? 'right' : 'left',
      paddingLeft: moderateScale(15, defaultScale),
      color: props.colors.black,
    },
    shadow: {
      shadowColor: props.colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: defaultScale,
      shadowRadius: 3,
      elevation: 15,
    },
    disableTextInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: props.colors.lightgrey,
      borderRadius: 2,
    },
    disableTextinput: {
      flex: 1,
      height: moderateScale(48, defaultScale),
      paddingLeft: moderateScale(15, defaultScale),
      textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
  });

export default withTheme(ATextInput);
