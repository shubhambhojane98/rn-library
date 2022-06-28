import {View} from 'react-native';
import React, {useState} from 'react';
import AAlert from '../components/AAlert/AAlert';
import AButton from '../components/AButton/AButton';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import ATypography from '../components/ATypography/ATypography';
import {Color} from '../theme';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../utils/Common';

const AAlertDemo = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAlertVisible1, setIsAlertVisible1] = useState(false);
  return (
    <View>
      <View>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: moderateScale(20, defaultScale)}}>
          Alert with default Props{' '}
        </ATypography>
        <AButton
          title={'Open Alert'}
          onPress={() => setIsAlertVisible(true)}
          width={290}
          color={'blue'}
          borderRadius={49}
          fontWeight={'500'}
          textDecorationLine={'underline'}
        />
        <AAlert
          visible={isAlertVisible}
          title={'Do you want to cancel the subscription?'}
          onPressYes={() => console.log('pressed Yes button')}
          onDismiss={() => setIsAlertVisible(false)}
          subTitle={'National Supply and Demand Dashboard Loreim ipsum'}
        />
      </View>
      <View>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: moderateScale(20, defaultScale)}}>
          Alert with backgroundColor, visible, borderRadius, animationType,
          title, titleColor, subTitle, description, onPressYes, onDismiss,
        </ATypography>
        <AButton
          title={'Open Alert2'}
          onPress={() => setIsAlertVisible1(true)}
          width={290}
          color={'blue'}
          borderRadius={49}
          fontWeight={'500'}
          textDecorationLine={'underline'}
        />
        <AAlert
          visible={isAlertVisible1}
          title={'Do you want to cancel the subscription?'}
          titleColor={'red'}
          onPressYes={() => console.log('pressed Yes button')}
          subTitle={'National Supply and Demand Dashboard Loreim ipsum'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin sed mauris et bibendum.'
          }
          onDismiss={() => setIsAlertVisible1(false)}
          backgroundColor={Color.white}
          borderRadius={8}
          animationType={'fade'}
        />
      </View>
    </View>
  );
};

export default AAlertDemo;
