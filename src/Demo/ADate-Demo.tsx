import {View} from 'react-native';
import React, {useState} from 'react';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import ATypography from '../components/ATypography/ATypography';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../utils/Common';
import ADate from '../components/ADate/ADate';
import {Color} from '../theme';

const ADateDemo = () => {
  const [date, setDate] = useState('');
  return (
    <View>
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: moderateScale(20, defaultScale)}}>
        Date with default Props:
      </ATypography>
      <ADate onSelectedDate={fDate => setDate(fDate)} />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: moderateScale(20, defaultScale)}}>
        Date with borderColor, marginBottom , marginLeft , marginRight ,
        marginTop , onSelectedDate,:
      </ATypography>
      <ADate
        borderColor={Color.environment}
        onSelectedDate={fDate => setDate(fDate)}
        marginRight={moderateScale(20, defaultScale)}
        marginLeft={moderateScale(20, defaultScale)}
        marginBottom={moderateScale(20, defaultScale)}
        marginTop={moderateScale(20, defaultScale)}
      />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: moderateScale(20, defaultScale)}}>
        Date with disable, errorText, onSelectedDate,:
      </ATypography>
      <ADate
        disable={false}
        errorText={'wrong Date'}
        onSelectedDate={fDate => setDate(fDate)}
      />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: moderateScale(20, defaultScale)}}>
        date with disable, placeholder
      </ATypography>
      <ADate
        disable={true}
        placeholder={'placeholder'}
        onSelectedDate={fDate => setDate(fDate)}
      />
    </View>
  );
};

export default ADateDemo;
