import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ABadge from '../../src/components/ABadge/ABadge';

it('renders correctly with label', () => {
  const tree = renderer.create(<ABadge children={10} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with visible false', () => {
  const tree = renderer
    .create(<ABadge children={10} visible={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
