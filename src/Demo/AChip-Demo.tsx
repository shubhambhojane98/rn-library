import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AChip from '../components/AChip/AChip';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {consoleLog} from '../utils/Log';

const AChipDemo = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        Chip with default prop
      </ATypography>
      <AChip label={'Whats New'} onPress={() => consoleLog('Whats New')} />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        {`Chip with  selectedBackgroundColor & textColor & selectedTextColor prop`}
      </ATypography>
      <AChip
        label={'Whats New'}
        onPress={() => consoleLog('Whats New')}
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
        onPress={() => consoleLog('Whats New')}
        isDisabled={true}
      />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        {`Chip with close icon prop`}
      </ATypography>
      <AChip
        label={'Whats New'}
        onPress={() => consoleLog('Whats New')}
        closeIcon={'close'}
        onPressCloseIcon={() => consoleLog('Close icon pressed')}
      />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        {`Chip with left icon prop`}
      </ATypography>
      <AChip
        label={'Whats New'}
        leftIcon={'uparrow'}
        onPressLeftIcon={() => consoleLog('Left icon pressed')}
        onPress={() => consoleLog('Whats New')}
      />
    </SafeAreaView>
  );
};

export default AChipDemo;
