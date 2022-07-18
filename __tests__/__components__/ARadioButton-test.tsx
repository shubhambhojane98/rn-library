import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ARadioButtonGroup from '../../src/components/ARadioButtonGroup/ARadioButtonGroup';

const RadioData = [
  {id: 1, value: 'First', disable: false},
  {id: 2, value: 'Second', disable: true},
  {id: 3, value: 'Third', disable: false},
  {id: 4, value: 'Four', disable: false},
  {id: 5, value: 'Five', disable: true},
];

it('renders correctly with default prop', () => {
  const tree = renderer
    .create(<ARadioButtonGroup onSelectValue={jest.fn} data={RadioData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
