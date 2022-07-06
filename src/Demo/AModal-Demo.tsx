import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AModal from '../components/AModal/AModal';
import AButton from '../components/AButton/AButton';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {Color} from '../theme';

const ARadioButtonDemo = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isModalVisible2, setIsModalVisible2] = React.useState(false);
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Modal with default props
        </ATypography>
        <AButton
          title={'Open Modal'}
          onPress={() => setIsModalVisible(true)}
          width={290}
          color={'blue'}
          borderRadius={49}
          fontWeight={'500'}
          textDecorationLine={'underline'}
        />
        <AModal
          visible={isModalVisible}
          onDismiss={() => setIsModalVisible(false)}
          closeButton={true}
          backgroundColor={Color.white}
          borderRadius={8}
          animationType={'fade'}
          children={
            <>
              <ATypography variant={TypographyVariant.PRIMARY_BOLD}>
                {' '}
                Modal content!
              </ATypography>
            </>
          }
        />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Modal with top right bottom left
        </ATypography>
        <AButton
          title={'Open Modal'}
          onPress={() => setIsModalVisible2(true)}
          width={290}
          color={'blue'}
          borderRadius={49}
          fontWeight={'500'}
          textDecorationLine={'underline'}
        />
        <AModal
          visible={isModalVisible2}
          onDismiss={() => setIsModalVisible2(false)}
          closeButton={true}
          backgroundColor={Color.white}
          borderRadius={8}
          animationType={'fade'}
          top={100}
          left={50}
          bottom={100}
          right={50}
          children={
            <>
              <ATypography variant={TypographyVariant.PRIMARY_BOLD}>
                {' '}
                Modal content!
              </ATypography>
            </>
          }
        />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Modal with loader
        </ATypography>
        <AButton
          title={'Open Modal'}
          onPress={() => setIsModalVisible(true)}
          width={290}
          color={'blue'}
          borderRadius={49}
          fontWeight={'500'}
          textDecorationLine={'underline'}
          isLoading={true}
        />
        <AModal
          visible={isModalVisible}
          onDismiss={() => setIsModalVisible(false)}
          closeButton={true}
          backgroundColor={Color.white}
          borderRadius={8}
          animationType={'fade'}
          children={
            <>
              <ATypography variant={TypographyVariant.PRIMARY_BOLD}>
                {' '}
                Modal content!
              </ATypography>
            </>
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ARadioButtonDemo;
