import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Color} from '../theme';
import ATypography from '../components/ATypography/ATypography';
import AToast from '../components/AToast/AToast';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../utils/Common';
import AButton from '../components/AButton/AButton';

const AToastDemo = ({navigation}: {navigation: any}) => {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={styles.text}>
          {'Toast.description'}
        </ATypography>
        <View style={{alignItems: 'center', width: '100%'}}>
          <AButton
            borderColor={Color.black}
            borderWidth={1}
            borderRadius={10}
            width={140}
            onPress={() => setVisible(!visible)}
            title={visible ? 'Hide Toast' : 'Show Toast'}
          />
        </View>
      </View>
      <AToast
        iconName={'fullstar'}
        iconHeight={20}
        iconWidth={20}
        label={'Toast_Label'}
        backgroundColor={Color.black}
        color={Color.white}
        duration={500}
        onDismiss={() => setVisible(false)}
        visible={visible}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    marginVertical: moderateScale(20, defaultScale),
    color: Color.black,
  },
  viewContainer: {
    marginHorizontal: moderateScale(10, defaultScale),
  },
});
export default AToastDemo;
