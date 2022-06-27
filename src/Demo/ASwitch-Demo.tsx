import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ASwitch from '../components/ASwitch/ASwitch';

const ASwitchDemo = () => {
  const [isActive, setIsActive] = useState(false);

  const ValueChange = () => {
    setIsActive(!isActive);
  };
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ASwitch
        onValueChange={ValueChange}
        switchSize={30}
        isActive={isActive}
        isDisabled={false}
      />
    </SafeAreaView>
  );
};

export default ASwitchDemo;

const styles = StyleSheet.create({});
