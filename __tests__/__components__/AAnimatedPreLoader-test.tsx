import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AAnimatedPreloader from '../../src/components/AAnimatedPreloader/AAnimatedPreloader';

it('renders correctly with image URL', () => {
  const tree = renderer
    .create(
      <AAnimatedPreloader
        sourceUri={require('../../src/Demo/animation/no-internet-connection.json')}
        autoPlay={true}
        loop={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
