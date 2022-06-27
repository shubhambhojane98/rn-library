import {SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ARadioButtonGroup from '../components/ARadioButtonGroup/ARadioButtonGroup';
import ATypography from '../components/ATypography/ATypography';

const ARadioButtonDemo = () => {
  const RadioData = [
    {id: 1, value: 'First'},
    {id: 2, value: 'Second'},
    {id: 3, value: 'Third'},
    {id: 4, value: 'Four'},
    {id: 5, value: 'Five'},
  ];

  const [radio, setRadio] = useState('');
  console.log(radio);
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <ATypography children="RadioButton Examples" />
        <ARadioButtonGroup
          onSelectValue={value => setRadio(value)}
          data={RadioData}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ARadioButtonDemo;
