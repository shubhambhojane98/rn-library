import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import AAvatar from '../components/AAvatar/AAvatar';

const AAvatarDemo = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Avatar with Label with default props
        </ATypography>
        <AAvatar label="AA" />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Avatar with Label with custom font size & size & radius
        </ATypography>
        <AAvatar label="AA" fontSize={24} size={72} borderRadius={36} />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Avatar from URL with default props
        </ATypography>
        <AAvatar sourceUri="https://unsplash.it/400/400?image=1" />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Avatar from URL with custom size & cache policy & radius
        </ATypography>
        <AAvatar
          sourceUri="https://unsplash.it/400/400?image=9"
          backgroundColor={Color.grey}
          size={200}
          borderRadius={100}
          cache="web"
        />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Avatar from URL with margin top, bottom, left & right
        </ATypography>
        <AAvatar
          sourceUri="https://unsplash.it/400/400?image=3"
          backgroundColor={Color.red}
          size={200}
          cache="cacheOnly"
          marginTop={10}
          marginBottom={10}
          marginLeft={20}
          marginRight={20}
          borderRadius={0}
        />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Avatar from Local Path
        </ATypography>
        {/* <AAvatar source={require('../../assets/images/FullStar.png')} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AAvatarDemo;
