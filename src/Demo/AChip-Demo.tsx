import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AChip from '../components/AChip/AChip';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';

const AChipDemo = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        Chip with default prop
      </ATypography>
      <AChip
        label={'Whats New'}
        iconHeight={20}
        iconWidth={20}
        rightIcon={'close'}
        onPress={() => console.log('Whats New')}
      />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        {`Chip with  selectedBackgroundColor & textColor & selectedTextColor prop`}
      </ATypography>
      <AChip
        label={'Whats New'}
        onPress={() => console.log('Whats New')}
        selectedBackgroundColor={Color.violet}
        textColor={Color.black}
        selectedTextColor={Color.healthcare}
      />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        {`Chip with disable prop`}
      </ATypography>
      <AChip
        label={'Whats New'}
        onPress={() => console.log('Whats New')}
        isDisabled={true}
      />
    </SafeAreaView>
  );
};

export default AChipDemo;
