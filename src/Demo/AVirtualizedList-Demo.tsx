import {SafeAreaView, Alert} from 'react-native';
import React from 'react';
import AVirtualizedList from '../components/AVirtualizedList/AVirtualizedList';
import ATypography from '../components/ATypography/ATypography';
import AButton from '../components/AButton/AButton';
import {Color} from '../theme';

const AVirtualizedListDemo = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <AVirtualizedList>
        <ATypography fontSize={12}>{'Virutalized List'}</ATypography>
        <AButton
          title={'Simple Button'}
          onPress={() => Alert.alert('button Pressed')}
          width={290}
          color={Color.blue}
          borderRadius={49}
        />
      </AVirtualizedList>
    </SafeAreaView>
  );
};

export default AVirtualizedListDemo;
