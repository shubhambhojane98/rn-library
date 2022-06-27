import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {CreditCard} from '../components/ATextInput/AMask';
import ATextInput from '../components/ATextInput/ATextInput';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {Color} from '../theme';

const ATextInputDemo = () => {
  const [credit, setCredit] = useState('');

  const onChangeText = (masked: any, unmasked: any) => {
    setCredit(masked); // you can use the unmasked value as well
  };
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
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
        />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          TextInput with rightIcon && iconHeight && iconWidth && borderColor
        </ATypography>
        <ATextInput
          marginTop={moderateScale(10, 0.1)}
          placeholder="Placeholder"
          keyboardType="name-phone-pad"
          rightIcon={'gifticon'}
          iconHeight={35}
          iconWidth={35}
          borderColor={Color.blue}
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
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ATextInputDemo;
