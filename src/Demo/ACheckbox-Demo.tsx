import {View} from 'react-native';
import React, {useState} from 'react';
import ACheckBox from '../components/ACheckbox/ACheckbox';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import ATypography from '../components/ATypography/ATypography';

const ACheckboxDemo = () => {
  const [checkedStatus, setCheckedStatus] = useState('unchecked');
  const handleCheckbox = () => {
    if (checkedStatus === 'checked') {
      setCheckedStatus('unchecked');
    } else {
      setCheckedStatus('checked');
    }
  };
  return (
    <View>
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        {`Checkbox with Status && onPress && label`}
      </ATypography>
      <ACheckBox
        status={checkedStatus}
        label={'Checkbox'}
        onPress={handleCheckbox}
      />

      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        {`Checkbox with disabled`}
      </ATypography>
      <ACheckBox
        status="checked"
        label={'Checkbox'}
        onPress={handleCheckbox}
        disable={true}
      />
      <ACheckBox
        status="unchecked"
        label={'Checkbox'}
        onPress={handleCheckbox}
        disable={true}
      />
    </View>
  );
};

export default ACheckboxDemo;
