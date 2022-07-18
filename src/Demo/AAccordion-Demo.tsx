import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ATypography from '../components/ATypography/ATypography';
import AAccordion from '../components/AAccordion/AAccordion';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../utils/Common';

const line1 =
  'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

const line2 =
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Consectetur adipiscing elit.';

const AAccordionDemo = () => {
  const [selected, setSelected] = React.useState('1');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 20}}>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: moderateScale(20, defaultScale)}}>
          List Accordion
        </ATypography>
        <AAccordion
          id="1"
          title="Uncontrolled Accordion"
          leftIconName="fullstar">
          <ATypography>{line1}</ATypography>
        </AAccordion>

        <AAccordion id="2" title="Controlled Accordion" leftIconName="gifticon">
          <ATypography>{line2}</ATypography>
        </AAccordion>

        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: moderateScale(20, defaultScale)}}>
          List Accordion handled
        </ATypography>
        <AAccordion
          id="1"
          title="Uncontrolled Accordion"
          expanded={selected === '1'}
          onPress={() => setSelected('1')}
          leftIconName="fullstar">
          <ATypography>{line1}</ATypography>
        </AAccordion>

        <AAccordion
          id="2"
          title="Controlled Accordion"
          expanded={selected === '2'}
          onPress={() => setSelected('2')}
          leftIconName="gifticon">
          <ATypography>{line2}</ATypography>
        </AAccordion>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AAccordionDemo;
