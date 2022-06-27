import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import AToast from '../components/AToast/AToast';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';

const AToastDemo = () => {
  return (
    <SafeAreaView
      style={{marginHorizontal: 20, backgroundColor: 'red', flex: 1}}>
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        Toast Demo
      </ATypography>
      <AToast
        iconName={'checkboxfilled'}
        label={'Successfully verified your phone number'}
        toastTime={1000}
        backgroundColor={Color.black}
        color={Color.white}
      />
    </SafeAreaView>
  );
};

export default AToastDemo;
