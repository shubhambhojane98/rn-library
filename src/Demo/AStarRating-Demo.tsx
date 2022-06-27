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
          StarRating with default prop Example
        </ATypography>
        <AStarRating onSelectValue={value => setStarRating(value)} />
        <ATypography variant={'primaryBold'} style={{marginVertical: 20}}>
          {`StarRating Example with  maxStar && defaultRating && height && width`}
        </ATypography>
        <AStarRating
          height={45}
          width={45}
          onSelectValue={value => setStarRating(value)}
          maxStar={6}
          defaultRating={3}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AStarRatingDemo;
