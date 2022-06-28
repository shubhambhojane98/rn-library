import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ARadioButtonGroup from '../../src/components/ARadioButtonGroup/ARadioButtonGroup';

const RadioData = [
  {id: 1, value: 'First'},
  {id: 2, value: 'Second'},
  {id: 3, value: 'Third'},
  {id: 4, value: 'Four'},
  {id: 5, value: 'Five'},
];

it('renders correctly with default prop', () => {
  const tree = renderer
    .create(<ARadioButtonGroup onSelectValue={jest.fn} data={RadioData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
