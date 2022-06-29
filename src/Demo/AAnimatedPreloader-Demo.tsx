import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AAnimatedPreloader from '../components/AAnimatedPreloader/AAnimatedPreloader';
import {Color} from '../theme';

const AAnimatedPreloaderDemo = () => {
  return (
    <View style={styles.container}>
      <AAnimatedPreloader
        sourceUri={require('./animation/no-internet-connection.json')}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
};

export default AAnimatedPreloaderDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: Color.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
