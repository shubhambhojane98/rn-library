import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import AAccordion from '../components/AAccordion/AAccordion';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';

const listData = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet',
    component: (
      <ATypography>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam.
      </ATypography>
    ),
  },
  {
    id: '2',
    title: 'Sed do eiusmod tempor incididunt ut labore',
    component: (
      <ATypography>
        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim.
      </ATypography>
    ),
  },
  {
    id: '3',
    title: 'Lorem enim ad minim veniam',
    component: (
      <ATypography>
        Do eiusmod tempor incididunt ut labor dolore magna aliqua. Ut enim minim
        veniam.
      </ATypography>
    ),
  },
];

const AAccordionDemo = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{margin: 20}}>
          Accordion with default props
        </ATypography>
        <AAccordion data={listData} marginLeft={20} marginRight={20} />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{margin: 20, marginTop: 60}}>
          Accordion with separatorColor
        </ATypography>
        <AAccordion
          data={listData}
          marginLeft={20}
          marginRight={20}
          separatorColor={Color.red}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AAccordionDemo;
