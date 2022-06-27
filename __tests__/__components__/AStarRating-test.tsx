import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AStarRating from '../../src/components/AStarRating/AStarRating';

it('renders correctly default prop', () => {
  const tree = renderer
    .create(<AStarRating onSelectValue={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with defaultRating with fraction value ', () => {
  const tree = renderer
    .create(<AStarRating defaultRating={2.5} onSelectValue={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with height & width & maxStar Prop ', () => {
  const tree = renderer
    .create(
      <AStarRating
        height={40}
        width={40}
        maxStar={6}
        onSelectValue={jest.fn()}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with defaultRating Prop ', () => {
  const tree = renderer
    .create(<AStarRating onSelectValue={jest.fn()} defaultRating={2.5} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
