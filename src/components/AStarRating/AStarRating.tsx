import {View, TouchableOpacity, StyleSheet, I18nManager} from 'react-native';
import React, {FC, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import ATypography from '../ATypography/ATypography';
import {defaultScale} from '../../utils/Common';
import IconSVG from '../../assets/svgs';

interface Props {
  defaultRating?: number;
  maxStar?: number;
  height?: number;
  width?: number;
  onSelectValue: (starRating: number) => void;
}

const defaultSize = 40;

const AStarRating: FC<Props> = ({
  defaultRating = 0,
  maxStar = 5,
  height = defaultSize,
  width = defaultSize,
  onSelectValue,
}) => {
  const [defaultStarRating, setDefaultStarRating] = useState(defaultRating - 1);
  const [maxRating, setMaxRating] = useState([...Array(maxStar)]);

  const onStarClick = (item: any, bool: boolean) => {
    if (bool) {
      item = item - 1 + 0.5;
    }
    setDefaultStarRating(item);
    onSelectValue(item + 1);
  };

  return (
    <View style={styles.ratingBarStyle}>
      {maxRating.map((item, i) => {
        return (
          <View key={i}>
            <IconSVG
              height={height}
              width={width}
              name={
                i <= defaultStarRating
                  ? 'fullstar'
                  : i >= defaultStarRating && i < defaultStarRating + 1
                  ? 'halfstar'
                  : 'emptystar'
              }
            />
            <View style={styles.wrapper}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.starBtn}
                onPress={() => onStarClick(i, true)}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.starBtn}
                onPress={() => onStarClick(i, false)}
              />
            </View>
          </View>
        );
      })}
      {/* {defaultStarRating !== undefined ? (
        <ATypography style={styles.ratingCount} fontSize={20}>
          {`${defaultStarRating + 1} / ${maxRating.length}`}
        </ATypography>
      ) : null} */}
      {defaultStarRating && (
        <ATypography style={styles.ratingCount} fontSize={20}>
          {`${defaultStarRating + 1} / ${maxRating.length}`}
        </ATypography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: moderateScale(10, defaultScale),
  },
  imageStyle: {
    width: moderateScale(40, defaultScale),
    height: moderateScale(40, defaultScale),
    transform: I18nManager.isRTL ? [{rotateY: '180deg'}] : [],
    resizeMode: 'cover',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
  },
  starBtn: {
    width: moderateScale(20, defaultScale),
    height: moderateScale(40, defaultScale),
  },
  ratingCount: {
    textAlign: 'left',
    margin: moderateScale(10, defaultScale),
  },
});

export default AStarRating;
