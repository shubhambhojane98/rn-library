import {SafeAreaView} from 'react-native';
import React from 'react';
import AProgressBar from '../components/AProgressBar/AProgressBar';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {Color} from '../theme';

const AProgressBarDemo = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20, marginVertical: 20}}>
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        ProgressBar with default prop
      </ATypography>
      <AProgressBar percentage={'70%'} />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        {`ProgressBar with  completedColorß & backgroundColor prop`}
      </ATypography>
      <AProgressBar
        completedColor={Color.blue}
        backgroundColor={Color.lightgrey}
        percentage={'70%'}
      />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        {`ProgressBar with  borderRadius & height prop`}
      </ATypography>
      <AProgressBar height={15} borderRadius={8} percentage={'70%'} />
    </SafeAreaView>
  );
};

export default AProgressBarDemo;
