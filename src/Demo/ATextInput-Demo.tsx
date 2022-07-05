import React, {createRef, useRef, useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {CreditCard} from '../components/ATextInput/AMask';
import ATextInput from '../components/ATextInput/ATextInput';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {Color} from '../theme';

const ATextInputDemo = () => {
  const [credit, setCredit] = useState('');
  const refInput2 = useRef();
  const refInput3 = useRef();
  const refInput4 = useRef();
  const refInput5 = useRef();

  const onChangeText = (masked: any) => {
    setCredit(masked); // you can use the unmasked value as well
  };
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <KeyboardAvoidingView>
        <ScrollView>
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            TextInput with disable prop
          </ATypography>
          <ATextInput placeholder="placeholder" marginTop={10} disable={true} />
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            TextInput with error message
          </ATypography>
          <ATextInput
            errorText={'Error text'}
            placeholder="Placeholder"
            returnKeyType="next"
            onSubmitEditing={() => refInput2.current?.focus()}
            marginTop={10}
          />
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            TextInput with password field
          </ATypography>
          <ATextInput
            marginTop={10}
            placeholder="Placeholder"
            isPassword={true}
            secureTextEntry={true}
            returnKeyType="next"
            onSubmitEditing={() => refInput3.current?.focus()}
            ref={refInput2}
          />
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            {`TextInput with rightIcon && iconHeight && iconWidth && borderColor`}
          </ATypography>
          <ATextInput
            marginTop={moderateScale(10, 0.1)}
            placeholder="Placeholder"
            keyboardType="name-phone-pad"
            rightIcon={'downarrow'}
            iconHeight={20}
            iconWidth={20}
            borderColor={Color.blue}
            ref={refInput3}
            onSubmitEditing={() => refInput4.current?.focus()}
            returnKeyType="next"
          />
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            Mask TextInput
          </ATypography>
          <ATextInput
            mask={CreditCard}
            value={credit}
            onChangeText={onChangeText}
            returnKeyType="next"
            ref={refInput4}
            onSubmitEditing={() => refInput5.current?.focus()}
          />
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            {`TextInput with right icon`}
          </ATypography>
          <ATextInput
            marginTop={moderateScale(10, 0.1)}
            placeholder="Placeholder"
            keyboardType="name-phone-pad"
            leftIcon={'downarrow'}
            iconHeight={20}
            iconWidth={20}
            ref={refInput5}
            returnKeyType="next"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ATextInputDemo;
