import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import ACard from '../components/ACard/ACard';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../utils/Common';

const ACardDemo = () => {
  return (
    <View>
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: 20}}>
        Card with default props: height, Width and children
      </ATypography>
      <ACard
        children={
          <ImageBackground
            resizeMode="cover"
            borderRadius={moderateScale(20, defaultScale)}
            style={{flex: 1}}
            source={{
              uri: 'https://blog.logrocket.com/wp-content/uploads/2020/05/setting-up-continuous-deployment-with-react-firebase-github-actions.png',
            }}></ImageBackground>
        }
        height={100}
        width={250}
      />
      <ATypography
        variant={TypographyVariant.PRIMARY_BOLD}
        style={{marginVertical: moderateScale(20, defaultScale)}}>
        Card with props: height, width, borderRadius, borderWidth, shadowColor,
        borderColor, children, elevation, shadowOffset, shadowOpacity,
        shadowRadius,
      </ATypography>
      <ACard
        width={300}
        height={120}
        borderColor={Color.environment}
        borderWidth={1}
        borderRadius={20}
        elevation={10}
        children={
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: moderateScale(20, defaultScale),
              backgroundColor: Color.environment,
              shadowColor: 'blue',
              elevation: moderateScale(10, defaultScale),
            }}>
            <ATypography variant={TypographyVariant.PRIMARY_BOLD}>
              Title 1
            </ATypography>
            <ATypography variant={TypographyVariant.PRIMARY_SEMI_BOLD}>
              Title 2
            </ATypography>
            <ATypography variant={TypographyVariant.SECONDARY_DEMI}>
              description
            </ATypography>
          </View>
        }
      />
    </View>
  );
};

export default ACardDemo;
