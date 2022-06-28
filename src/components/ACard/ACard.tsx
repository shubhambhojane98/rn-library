import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Color} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../utils/Common';

interface Props {
  children: any;
  height: number;
  width: number | string;
  borderRadius?: number;
  borderWidth?: number;
  shadowColor?: string;
  elevation?: number;
  borderColor?: string;
  shadowOffset?: {width: number; height: number};
  shadowOpacity?: number;
  shadowRadius?: number;
}

const TCard: FC<Props> = ({
  height,
  width,
  borderRadius,
  borderWidth,
  shadowColor,
  borderColor,
  children,
  elevation,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        height,
        width,
        borderRadius,
        borderWidth,
        borderColor,
        elevation,
        ...styles.shadowProp,
        shadowColor,
        shadowOffset,
        shadowOpacity,
        shadowRadius,
      }}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignContent: 'center',
    margin: moderateScale(5, defaultScale),
  },
  shadowProp: {
    shadowColor: Color.blackOpac80,
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
TCard.defaultProps = {
  height: moderateScale(100, defaultScale),
  width: '100%',
  borderColor: Color.black,
  elevation: moderateScale(5, defaultScale),
  borderRadius: moderateScale(10, defaultScale),
};
export default TCard;
