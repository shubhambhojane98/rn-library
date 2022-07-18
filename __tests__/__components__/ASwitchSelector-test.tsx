import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ASwitchSelector from '../../src/components/ASwitchSelector/ASwitchSelector';

it('renders correctly default prop', () => {
  const tree = renderer
    .create(
      <ASwitchSelector option1="one" option2="2" onSelectSwitch={jest.fn} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly isDisabled prop', () => {
  const tree = renderer
    .create(
      <ASwitchSelector
        option1="One"
        option2="Two"
        onSelectSwitch={jest.fn()}
        width={200}
        isDisabled={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with width prop', () => {
  const tree = renderer
    .create(
      <ASwitchSelector
        option1="one"
        option2="2"
        width={200}
        onSelectSwitch={jest.fn()}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
