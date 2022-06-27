import {View} from 'react-native';
import React, {useState} from 'react';
import ACheckBox from '../components/ACheckbox/ACheckbox';
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
      <ATypography variant={'primaryBold'} style={{marginVertical: 20}}>
        Checkbox with Status && onPress && label
      </ATypography>
      <ACheckBox
        status={checkedStatus}
        label={'Checkbox'}
        onPress={handleCheckbox}
      />
    </View>
  );
};

export default ACheckboxDemo;
