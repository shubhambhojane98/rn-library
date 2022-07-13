import {SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ARadioButtonGroup from '../components/ARadioButtonGroup/ARadioButtonGroup';
import ATypography from '../components/ATypography/ATypography';

const ARadioButtonDemo = () => {
  const RadioData = [
    {id: 1, value: 'First', disable: false},
    {id: 2, value: 'Second', disable: true},
    {id: 3, value: 'Third', disable: false},
    {id: 4, value: 'Four', disable: false},
    {id: 5, value: 'Five', disable: true},
  ];

  const [radio, setRadio] = useState(RadioData[0]);

  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <ATypography children="RadioButton Examples" />
        <ARadioButtonGroup
          onSelectValue={(value: any) => setRadio(value)}
          data={RadioData}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ARadioButtonDemo;
