import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AImage from '../../src/components/AImage/AImage';

it('renders correctly with image URL', () => {
  const tree = renderer
    .create(<AImage sourceUri="https://unsplash.it/400/400?image=1" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// it('renders correctly with local image path', () => {
//   const tree = renderer
//     .create(<AImage source={require('../../assets/images/FullStar.png')} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
