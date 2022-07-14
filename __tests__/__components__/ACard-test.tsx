import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ACard from '../../src/components/ACard/ACard';
import ATypography from '../../src/components/ATypography/ATypography';
import {TypographyVariant} from '../../src/components/ATypography/ATypographyEnum';
import {ImageBackground, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../src/utils/Common';
import {Color} from '../../src/theme';

it('renders correctly with default prop', () => {
  const tree = renderer
    .create(
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
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with height, width, borderRadius, borderWidth, shadowColor,borderColor, children, elevation, shadowOffset, shadowOpacity,shadowRadius,', () => {
  const tree = renderer
    .create(
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
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
