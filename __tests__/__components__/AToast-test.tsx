import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AToast from '../../src/components/AToast/AToast';

beforeEach(() => {
  jest.useFakeTimers();
});

it('renders correctly with label', () => {
  const tree = renderer
    .create(<AToast label={'Successfully verified your phone number'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const tree = renderer
    .create(
      <AToast
        iconName={'checkboxfilled'}
        label={'Successfully verified your phone number'}
        toastTime={1000}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
