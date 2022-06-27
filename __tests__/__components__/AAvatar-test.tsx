import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AAvatar from '../../src/components/AAvatar/AAvatar';

it('renders correctly with label', () => {
  const tree = renderer.create(<AAvatar label="AA" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with label, fontSize & radius', () => {
  const tree = renderer
    .create(<AAvatar label="AA" fontSize={24} size={72} borderRadius={36} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with sourceUri', () => {
  const tree = renderer
    .create(<AAvatar sourceUri="https://unsplash.it/400/400?image=1" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
