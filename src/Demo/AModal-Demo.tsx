import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import AModal from '../components/AModal/AModal';
import AButton from '../components/AButton/AButton';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';
import {useTheme} from '../core/theming';

const AModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isModalVisible2, setIsModalVisible2] = React.useState(false);
  const [isModalVisible3, setIsModalVisible3] = React.useState(false);
  const {colors} = useTheme();

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
          color={colors.white}
          borderRadius={49}
          fontWeight={'500'}
          textDecorationLine={'underline'}
        />
        <AModal
          visible={isModalVisible}
          onDismiss={() => setIsModalVisible(false)}
          closeButton={true}
          backgroundColor={colors.white}
          borderRadius={8}
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
          color={colors.white}
          borderRadius={49}
          fontWeight={'500'}
          textDecorationLine={'underline'}
        />
        <AModal
          visible={isModalVisible2}
          onDismiss={() => setIsModalVisible2(false)}
          closeButton={true}
          backgroundColor={colors.white}
          borderRadius={8}
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
          color={colors.white}
          borderRadius={49}
          fontWeight={'500'}
          textDecorationLine={'underline'}
          isLoading={true}
        />
        <AModal
          visible={isModalVisible}
          onDismiss={() => setIsModalVisible(false)}
          closeButton={true}
          backgroundColor={colors.white}
          borderRadius={8}
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
          Bottom Modal
        </ATypography>
        <AButton
          title={'Open Modal'}
          onPress={() => setIsModalVisible3(true)}
          width={290}
          color={colors.white}
          borderRadius={49}
          fontWeight={'500'}
          textDecorationLine={'underline'}
        />
        <AModal
          visible={isModalVisible3}
          onDismiss={() => setIsModalVisible3(false)}
          closeButton={true}
          backgroundColor={colors.white}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          borderRadius={8}
          top={350}
          left={1}
          right={1}
          bottom={1}
          style={styles.bottomModalView}
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

const styles = StyleSheet.create({
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default AModalDemo;
