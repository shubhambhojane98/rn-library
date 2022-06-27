import {SafeAreaView} from 'react-native';
import React from 'react';
import ASwitchSelector from '../components/ASwitchSelector/ASwitchSelector';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';

const ASwitchSelectorDemo = () => {
  const onSelectSwitch = (index: number) => {
    console.log('Selected index', index);
  };
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ATypography
        children="SwitchSelector with default prop"
        variant={TypographyVariant.PRIMARY_BOLD}
      />
      <ASwitchSelector
        option1="One"
        option2="Two"
        onSelectSwitch={onSelectSwitch}
      />
      <ATypography
        children="SwitchSelector with width prop"
        style={{marginVertical: 20}}
        variant={TypographyVariant.PRIMARY_BOLD}
      />
      <ASwitchSelector
        option1="One"
        option2="Two"
        onSelectSwitch={onSelectSwitch}
        width={200}
      />
    </SafeAreaView>
  );
};

export default ASwitchSelectorDemo;
