import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconSVG from './src/assets/svgs';
import AButton from './src/components/AButton/AButton';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <IconSVG name="gifticon" />
      <AButton
        onPress={() => {}}
        title={'Open Modal'}
        width={290}
        color={'blue'}
        borderRadius={49}
        fontWeight={'500'}
        textDecorationLine={'underline'}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
