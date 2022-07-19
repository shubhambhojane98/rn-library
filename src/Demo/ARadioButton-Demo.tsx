import {Image, SafeAreaView, ScrollView} from 'react-native';
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
        <ATypography children="RadioButton with custom Images" />
        <ARadioButtonGroup
          onSelectValue={(value: any) => setRadio(value)}
          data={RadioData}
          selectedRadio={() => (
            <Image
              source={{
                uri: 'https://static.thenounproject.com/png/195060-200.png',
              }}
              style={{height: 20, width: 20}}
            />
          )}
          unselectedRadio={() => (
            <Image
              source={{
                uri: 'https://icon-library.com/images/radio-button-icon/radio-button-icon-18.jpg',
              }}
              style={{height: 20, width: 20}}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ARadioButtonDemo;
