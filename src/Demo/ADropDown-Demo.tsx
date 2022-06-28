import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import ADropDown from '../components/ADropDown/ADropDown';

const ADropDownDemo = () => {
  const user = [
    {id: 2, title: 'ritesh', value: 'ritesh'},
    {id: 3, title: 'amit', value: 'amit'},
    {id: 4, title: 'rohan', value: 'rohan'},
    {id: 6, title: 'virat', value: 'virat'},
    {id: 7, title: 'rohit', value: 'rohit'},
    {id: 8, title: 'rahul', value: 'rahul'},
  ];
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Dropdown with default props
        </ATypography>
        <ADropDown placeholder="placeholder" data={user} />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Dropdown with custom render
        </ATypography>
        <ADropDown
          placeholder="placeholder"
          data={user}
          renderItemCustom={item => {
            return (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: Color.greyOpac10,
                }}>
                <ATypography
                  variant={TypographyVariant.PRIMARY_BOLD}
                  style={{
                    padding: 20,
                  }}>
                  {item.title}
                </ATypography>
              </View>
            );
          }}
        />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Dropdown with custom height, borderColor
        </ATypography>
        <ADropDown
          placeholder="placeholder"
          data={user}
          height={170}
          borderColor={Color.blue}
        />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Dropdown with disabled
        </ATypography>
        <ADropDown placeholder="placeholder" data={user} disable={true} />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Dropdown with error
        </ATypography>
        <ADropDown
          placeholder="placeholder"
          data={user}
          errorText={'Please select 1 option'}
        />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Dropdown with margins
        </ATypography>
        <ADropDown
          placeholder="placeholder"
          data={user}
          marginLeft={20}
          marginRight={20}
          marginTop={10}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ADropDownDemo;
