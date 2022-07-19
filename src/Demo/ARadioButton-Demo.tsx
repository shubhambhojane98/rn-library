import {Image, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import ARadioButtonGroup from '../components/ARadioButtonGroup/ARadioButtonGroup';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {defaultScale} from '../utils/Common';
import {moderateScale} from 'react-native-size-matters';
import {consoleLog} from '../utils/Log';

const ARadioButtonDemo = ({navigation}: {navigation: any}) => {
  const RadioData = [
    {id: 1, value: 'First'},
    {id: 2, value: 'Second'},
    {id: 3, value: 'Third'},
    {id: 4, value: 'Four'},
    {id: 5, value: 'Five'},
  ];

  const RadioData2 = [
    {id: 1, value: 'First'},
    {id: 2, value: 'Second'},
    {id: 3, value: 'Third'},
    {id: 4, value: 'Four', disable: true},
    {id: 5, value: 'Five', disable: true},
  ];

  const [radio, setRadio] = useState(RadioData[0]);

  consoleLog(radio);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ATypography
          style={styles.text}
          variant={TypographyVariant.PRIMARY_BOLD}
          children={'RadioButton_Example'}
        />
        <ARadioButtonGroup
          onSelectValue={(value: any) => setRadio(value)}
          data={RadioData}
        />
        <ATypography
          style={styles.text}
          variant={TypographyVariant.PRIMARY_BOLD}
          children={'RadioButton with disable'}
        />
        <ARadioButtonGroup
          onSelectValue={(value: any) => setRadio(value)}
          data={RadioData2}
        />
        <ATypography
          style={styles.text}
          variant={TypographyVariant.PRIMARY_BOLD}
          children={'RadioButton with custom images/icons'}
        />
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20, defaultScale),
  },
  text: {
    marginVertical: moderateScale(20, defaultScale),
  },
});
export default ARadioButtonDemo;
