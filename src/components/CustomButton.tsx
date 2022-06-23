import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconSVG from '../assets/svgs';

const CustomButton = () => {
  return (
    <View>
      <Text>CustomButton is here</Text>
      <IconSVG name="gifticon" />
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
