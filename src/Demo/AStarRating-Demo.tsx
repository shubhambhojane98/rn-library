import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AStarRating from '../components/AStarRating/AStarRating';
import ATypography from '../components/ATypography/ATypography';

const AStarRatingDemo = () => {
  const [starRating, setStarRating] = useState(0);
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <ATypography variant={'primaryBold'} style={{marginVertical: 20}}>
          StarRating Example
        </ATypography>
        <AStarRating
          height={45}
          width={45}
          // defaultRating={3}
          onSelectValue={value => setStarRating(value)}
          maxStar={6}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AStarRatingDemo;
