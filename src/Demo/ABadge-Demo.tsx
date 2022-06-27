import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import ABadge from '../components/ABadge/ABadge';

const ABadgeDemo = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <View
          style={{marginVertical: 10, borderWidth: 1, paddingHorizontal: 10}}>
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            Badge with default props
          </ATypography>
          <ABadge children={10} />
        </View>
        <View
          style={{marginVertical: 10, borderWidth: 1, paddingHorizontal: 10}}>
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            Badge tagged at top right
          </ATypography>
          <ABadge children={10} right={0} />
        </View>
        <View
          style={{marginVertical: 10, borderWidth: 1, paddingHorizontal: 10}}>
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            Badge tagged at bottom left and with custom size
          </ATypography>
          <ABadge children={10} bottom={0} size={34} />
        </View>
        <View
          style={{marginVertical: 10, borderWidth: 1, paddingHorizontal: 10}}>
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: 20}}>
            Badge tagged at bottom right and with custom backgroundColor and
            text color
          </ATypography>
          <ABadge
            children={10}
            bottom={0}
            right={0}
            backgroundColor={Color.blue}
            color={Color.yellow}
            size={28}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ABadgeDemo;
