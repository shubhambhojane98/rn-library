import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AProgressBar from '../../src/components/AProgressBar/AProgressBar';
import {Color} from '../../src/theme';

it('renders correctly default prop', () => {
  const tree = renderer.create(<AProgressBar percentage={'60%'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with completedColor & backgroundColor prop', () => {
  const tree = renderer
    .create(
      <AProgressBar
        completedColor={Color.blue}
        backgroundColor={Color.lightgrey}
        percentage={'60%'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with borderRadius & height prop', () => {
  const tree = renderer
    .create(<AProgressBar borderRadius={8} height={12} percentage={'60%'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
