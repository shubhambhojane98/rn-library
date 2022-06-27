import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import AImage from '../components/AImage/AImage';

const AImageDemo = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <ATypography variant={'primaryBold'} style={{marginVertical: 20}}>
          Image from URL with only required props
        </ATypography>
        <AImage sourceUri="https://unsplash.it/400/400?image=1" />
        <ATypography variant={'primaryBold'} style={{marginVertical: 20}}>
          Image from URL with custom width & height & cache policy
        </ATypography>
        <AImage
          sourceUri="https://unsplash.it/400/400?image=9"
          backgroundColor={Color.grey}
          width={100}
          height={100}
          cache="web"
        />
        <ATypography variant={'primaryBold'} style={{marginVertical: 20}}>
          Image from URL with margin top, bottom, left & right
        </ATypography>
        <AImage
          sourceUri="https://unsplash.it/400/400?image=3"
          backgroundColor={Color.red}
          width={200}
          height={200}
          cache="cacheOnly"
          marginTop={10}
          marginBottom={10}
          marginLeft={20}
          marginRight={20}
        />
        <ATypography variant={'primaryBold'} style={{marginVertical: 20}}>
          Image from Local Path
        </ATypography>
        {/* <AImage source={require('../../assets/images/FullStar.png')} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AImageDemo;
