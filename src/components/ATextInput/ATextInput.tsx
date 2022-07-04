import React, {FC, useState} from 'react';
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
import {Color} from '../../theme';
import {TextAlignVertical, AutoCapitalize} from './ATextInputEnum';
import ATypography from '../ATypography/ATypography';
import MaskInput from 'react-native-mask-input';
import {TypographyVariant} from '../ATypography/ATypographyEnum';

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
  inputRef?: any;
}

const defaultSize = 20;
const defaultMargin = 5;

const ATextInput: FC<Props> = ({
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
  width,
  rightIcon,
  leftIcon,
  disable,
  showObfuscatedValue,
  obfuscationCharacter,
  placeholderFillCharacter,
  mask,
  inputRef,
}) => {
  const [visible, setVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };
  const handlePassword = () => {
    setVisible(!visible);
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View>
      <View>
        {disable && (
          <View
            style={{
              ...styles.disableTextInputContainer,
              width: width,
              marginTop: moderateScale(marginTop),
              marginBottom: moderateScale(marginBottom),
              marginLeft: moderateScale(marginLeft),
              marginRight: moderateScale(marginRight),
            }}>
            <TextInput
              style={styles.disableTextinput}
              placeholder={placeholder}
              editable={false}
              placeholderTextColor={
                placeholderTextColor || Color.placeholderTextColor
              }
            />
            {rightIcon ? (
              <View style={styles.icon}>
                <IconSVG name={rightIcon} />
              </View>
            ) : null}
          </View>
        )}

        {!mask && !disable && (
          <View
            style={[
              styles.textinputContainer,
              isFocused && {...styles.shadow, borderColor: Color.black},
              !isFocused && {
                borderColor: errorText ? Color.red : borderColor,
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
              <View style={styles.icon}>
                <IconSVG
                  height={moderateScale(iconHeight)}
                  width={moderateScale(iconWidth)}
                  name={leftIcon}
                />
              </View>
            )}
            <TextInput
              style={styles.textinput}
              placeholder={placeholder}
              onChangeText={onChangeText}
              editable={editable}
              ref={inputRef}
              autoCorrect={autoCorrect}
              placeholderTextColor={
                placeholderTextColor || Color.placeholderTextColor
              }
              value={value}
              autoFocus={autoFocus}
              keyboardType={keyboardType}
              textContentType={textContentType}
              underlineColorAndroid={underlineColorAndroid}
              textAlignVertical={textAlignVertical}
              returnKeyType={returnKeyType}
              secureTextEntry={secureTextEntry}
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
              <View style={styles.icon}>
                <IconSVG
                  height={iconHeight}
                  onPress={handlePassword}
                  name={visible ? 'showpassword' : 'hidepassword'}
                />
              </View>
            )}
            {!isPassword && rightIcon && (
              <View style={styles.icon}>
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
              styles.textinputContainer,
              isFocused && {...styles.shadow, borderColor: Color.black},
              !isFocused && {
                borderColor: errorText ? Color.red : borderColor,
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
              style={styles.textinput}
              value={value}
              ref={inputRef}
              showObfuscatedValue={showObfuscatedValue}
              obfuscationCharacter={obfuscationCharacter}
              placeholderFillCharacter={placeholderFillCharacter}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
              onEndEditing={onEndEditing}
              onFocus={onFocus}
              onBlur={onBlur}
              keyboardType={keyboardType}
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
            color={Color.red}
            fontSize={14}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textinputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  icon: {
    paddingRight: moderateScale(15, 0.2),
    paddingLeft: moderateScale(5, 0.2),
  },
  textinput: {
    flex: 1,
    height: moderateScale(48, 0.2),
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    paddingLeft: moderateScale(15, 0.2),
    color: Color.black,
  },
  shadow: {
    shadowColor: Color.yellow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 15,
  },
  disableTextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.lightgrey,
    borderRadius: 2,
  },
  disableTextinput: {
    flex: 1,
    height: moderateScale(48, 0.2),
    paddingLeft: moderateScale(15, 0.2),
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});

export default ATextInput;
