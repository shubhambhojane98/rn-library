import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AButton from '../../src/components/AButton/AButton';
import {Color} from '../../src/theme';

it('renders correctly with default props', () => {
  const tree = renderer
    .create(<AButton width={100} onPress={jest.fn()} title={'Press Me'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with disable', () => {
  const tree = renderer
    .create(
      <AButton
        width={100}
        onPress={jest.fn()}
        title={'Press Me'}
        isDisabled={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with title, backgroundColor, height, width, color,borderRadius, borderWidth, borderColor, onPress ', () => {
  const tree = renderer
    .create(
      <AButton
        borderColor={Color.black}
        borderWidth={1}
        title={'Simple Button'}
        onPress={jest.fn()}
        width={290}
        color={'black'}
        borderRadius={49}
        backgroundColor={Color.yellow}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with title, backgroundColor, height, width, color, borderRadius, SourceImage, onPress ', () => {
  const tree = renderer
    .create(
      <AButton
        title={'Button with text & Image'}
        borderRadius={40}
        height={50}
        width={300}
        backgroundColor={Color.yellow}
        onPress={jest.fn()}
        sourceImage={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        imageStyle={{height: 20, width: 40}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with title, backgroundColor, height, width, color, borderRadius, iconName, iconHeight, iconWidth, onPress ', () => {
  const tree = renderer
    .create(
      <AButton
        iconName={'checkboxfilled'}
        iconHeight={20}
        iconWidth={20}
        title={'Button with icon'}
        borderRadius={40}
        height={50}
        width={300}
        backgroundColor={Color.yellow}
        onPress={jest.fn()}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with title, width, hyperlink, fontWeight, textDecorationline, onPress ', () => {
  const tree = renderer
    .create(
      <AButton
        title={'Skip for Now'}
        onPress={jest.fn()}
        width={290}
        fontWeight={'normal'}
        hyperlink={true}
        textDecorationLine={'underline'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with backgroundSource, height, width, onPress', () => {
  const tree = renderer
    .create(
      <AButton
        backgroundSource={{uri: 'https://reactjs.org/logo-og.png'}}
        onPress={jest.fn()}
        width={190}
        height={50}
        title={''}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
