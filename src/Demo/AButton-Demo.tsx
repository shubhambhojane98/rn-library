import React from 'react';
import {Alert, SafeAreaView, ScrollView, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import {defaultScale} from '../utils/Common';
import AButton from '../components/AButton/AButton';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';

const AButtonDemo = () => {
  return (
    <SafeAreaView style={{marginHorizontal: moderateScale(20, defaultScale)}}>
      <ScrollView>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: moderateScale(20, defaultScale)}}>
          Button with defauult props
        </ATypography>
        <View style={{padding: moderateScale(10, 0.1)}}>
          <AButton
            width={100}
            onPress={() => Alert.alert('button Pressed')}
            title={'Press Me'}
          />
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: moderateScale(20, defaultScale)}}>
            Button with title && backgroundColor && height && width && color &&
            borderRadius && borderWidth && borderColor && onPress
          </ATypography>
          <AButton
            borderColor={Color.black}
            borderWidth={1}
            title={'Simple Button'}
            onPress={() => Alert.alert('button Pressed')}
            width={moderateScale(290, 0.1)}
            color={'black'}
            borderRadius={moderateScale(49, 0.1)}
            backgroundColor={Color.yellow}
          />
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: moderateScale(20, defaultScale)}}>
            Button with title && backgroundColor && height && width && color &&
            borderRadius && SourceImage && onPress
          </ATypography>
          <AButton
            title={'Button with text & Image'}
            borderRadius={40}
            height={50}
            width={300}
            backgroundColor={Color.yellow}
            onPress={() => Alert.alert('Button Pressed')}
            sourceImage={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            imageStyle={{height: 20, width: 40}}
          />
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: moderateScale(20, defaultScale)}}>
            Button with title && backgroundColor && height && width && color &&
            borderRadius && iconName && iconHeight && iconWidth && onPress
          </ATypography>
          <View
            style={{
              padding: moderateScale(10, 0.1),
              justifyContent: 'space-around',
            }}>
            <AButton
              iconName={'checkboxfilled'}
              iconHeight={moderateScale(20, 0.1)}
              iconWidth={moderateScale(20, 0.1)}
              title={'Button with icon'}
              borderRadius={moderateScale(40, 0.1)}
              height={moderateScale(50, 0.1)}
              width={moderateScale(300, 0.1)}
              backgroundColor={Color.yellow}
              onPress={() => Alert.alert('Button Pressed')}
            />
          </View>
          <ATypography
            variant={TypographyVariant.PRIMARY_BOLD}
            style={{marginVertical: moderateScale(20, defaultScale)}}>
            Button with title && width && hyperlink && fontWeight &&
            textDecorationline && onPress
          </ATypography>
          <AButton
            title={'Forgot your password ?'}
            onPress={() => Alert.alert('Forgot Password Pressed')}
            width={290}
            fontWeight={'normal'}
            hyperlink={true}
          />
          <AButton
            title={'Register Now'}
            onPress={() => Alert.alert('button Pressed')}
            width={290}
            hyperlink={true}
            fontWeight={'bold'}
          />
          <AButton
            title={'Skip for Now'}
            onPress={() => Alert.alert('button Pressed')}
            width={290}
            fontWeight={'normal'}
            hyperlink={true}
            textDecorationLine={'underline'}
          />
        </View>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: moderateScale(20, defaultScale)}}>
          Image with backgroundSource && height && width && onPress
        </ATypography>
        <View style={{padding: moderateScale(10, 0.1)}}>
          <AButton
            backgroundSource={{uri: 'https://reactjs.org/logo-og.png'}}
            onPress={() => Alert.alert('button Pressed')}
            width={moderateScale(190, 0.1)}
            height={moderateScale(50, 0.1)}
            backgroundColor={Color.white}
            title={''}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AButtonDemo;
