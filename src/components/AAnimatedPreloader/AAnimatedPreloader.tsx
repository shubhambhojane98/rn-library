import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Lottie from 'lottie-react-native';

interface Prop {
  sourceUri: string;
  autoPlay: boolean;
  loop: boolean;
}
const AAnimatedPreloader: FC<Prop> = ({
  sourceUri,
  autoPlay = true,
  loop = true,
}) => {
  return <Lottie source={sourceUri} autoPlay={autoPlay} loop={loop} />;
};

export default AAnimatedPreloader;

const styles = StyleSheet.create({});
