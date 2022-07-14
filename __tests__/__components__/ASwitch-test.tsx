import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ASwitch from '../../src/components/ASwitch/ASwitch';
import {Color} from '../../src/theme';

it('renders correctly default prop', () => {
  const tree = renderer
    .create(
      <ASwitch
        onValueChange={jest.fn()}
        switchSize={30}
        isActive={true}
        isDisabled={false}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with disable', () => {
  const tree = renderer
    .create(
      <ASwitch
        onValueChange={jest.fn()}
        switchSize={30}
        isActive={false}
        isDisabled={true}
        activeColor={Color.environment}
        inActiveColor={Color.yellow}
        knobColor={Color.red}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly activeColor & inactive & knobColor  prop', () => {
  const tree = renderer
    .create(
      <ASwitch
        onValueChange={jest.fn()}
        switchSize={30}
        isActive={false}
        isDisabled={false}
        activeColor={Color.environment}
        inActiveColor={Color.yellow}
        knobColor={Color.red}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
