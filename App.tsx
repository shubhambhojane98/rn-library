import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconSVG from './src/assets/svgs';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <IconSVG name="gifticon" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
