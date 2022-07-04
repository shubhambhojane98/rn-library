import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AChip from '../../src/components/AChip/AChip';
import {Color} from '../../src/theme';

it('renders correctly with default prop', () => {
  const tree = renderer
    .create(<AChip label="Whats New" onPress={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with selectedBackgroundColor & textColor & selectedTextColor prop', () => {
  const tree = renderer
    .create(
      <AChip
        label="Whats New"
        onPress={jest.fn}
        selectedBackgroundColor={Color.violet}
        textColor={Color.black}
        selectedTextColor={Color.healthcare}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
