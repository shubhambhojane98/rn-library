import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import DateTimePicker from '@react-native-community/datetimepicker';
import ATextInput from '../../components/ATextInput/ATextInput';
import {defaultScale} from '../../utils/Common';

interface Prop {
  onSelectedDate: (fDate: any) => void;
  height?: number;
  borderColor?: string;
  placeholder?: string;
  disable?: boolean;
  errorText?: string;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
}

const TDate: React.FC<Prop> = ({
  borderColor,
  placeholder,
  disable,
  errorText,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  onSelectedDate,
}) => {
  const [show, setShow] = useState(false);
  const getFormatedDate = () => {
    let todayDate = new Date();
    let fDate =
      todayDate.getDate() +
      '/' +
      (todayDate.getMonth() + 1) +
      '/' +
      todayDate.getFullYear();
    return fDate;
  };
  const [date, setDate] = useState(getFormatedDate());

  const OpenCalender = () => {
    if (!disable) {
      setShow(true);
    }
  };
  const onChange = (event: any, selectedDate: any) => {
    setShow(false);

    const currentDate = selectedDate;
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setDate(fDate);
    onSelectedDate(fDate);
  };
  return (
    <View renderToHardwareTextureAndroid style={styles.containerStyle}>
      <View>
        <ATextInput
          placeholder={placeholder}
          editable={false}
          value={date}
          disable={disable}
          errorText={errorText}
          rightIcon={'Calender'}
          borderColor={borderColor}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginTop={marginTop}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={OpenCalender}
          style={styles.dropDownButton}
        />
        {show && (
          <DateTimePicker
            testID="DateTimePicker"
            value={new Date()}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

export default TDate;

const styles = StyleSheet.create({
  containerStyle: {
    marginRight: moderateScale(20, defaultScale),
    marginLeft: moderateScale(20, defaultScale),
    marginBottom: moderateScale(20, defaultScale),
    marginTop: moderateScale(20, defaultScale),
  },
  dropDownButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
