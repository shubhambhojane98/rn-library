import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ACheckBox from '../../src/components/ACheckbox/ACheckbox';

it('renders correctly default prop', () => {
  const tree = renderer
    .create(
      <ACheckBox status="unchecked" label={'Checkbox'} onPress={jest.fn} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with disabled prop', () => {
  const tree = renderer
    .create(
      <ACheckBox
        status="checked"
        label={'Checkbox'}
        onPress={jest.fn}
        disable={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
