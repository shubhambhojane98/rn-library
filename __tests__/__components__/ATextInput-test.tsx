import 'react-native';
import React, {useState} from 'react';
import renderer from 'react-test-renderer';
import ATextInput from '../../src/components/ATextInput/ATextInput';
import {Color} from '../../src/theme';
import {CreditCard} from '../../src/components/ATextInput/AMask';

it('renders correctly default prop', () => {
  const tree = renderer
    .create(<ATextInput placeholder="placeholder" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with default & margingTop prop', () => {
  const tree = renderer
    .create(
      <ATextInput placeholder="placeholder" marginTop={10} disable={true} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with default & margingTop prop', () => {
  const tree = renderer
    .create(
      <ATextInput
        errorText={'Error text'}
        placeholder="Placeholder"
        marginTop={10}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with isPassword & secureTextEntry prop', () => {
  const tree = renderer
    .create(
      <ATextInput
        placeholder="Placeholder"
        isPassword={true}
        secureTextEntry={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with rightIcon & iconHeight & iconWidth & borderColor & keyboardType prop', () => {
  const tree = renderer
    .create(
      <ATextInput
        placeholder="Placeholder"
        keyboardType="name-phone-pad"
        rightIcon={'gifticon'}
        iconHeight={35}
        iconWidth={35}
        borderColor={Color.blue}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with mask & value  prop', () => {
  const tree = renderer
    .create(
      <ATextInput mask={CreditCard} value={jest.fn} onChangeText={jest.fn} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with mask & value & errorText  prop', () => {
  const tree = renderer
    .create(
      <ATextInput
        mask={CreditCard}
        errorText={'Error Text'}
        value={jest.fn}
        onChangeText={jest.fn}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
