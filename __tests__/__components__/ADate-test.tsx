import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ADate from '../../src/components/ADate/ADate';
import {Color} from '../../src/theme';
import {moderateScale} from 'react-native-size-matters';
import {defaultScale} from '../../src/utils/Common';

it('renders correctly with default props', () => {
  const tree = renderer.create(<ADate onSelectedDate={jest.fn()} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with borderColor, marginBottom , marginLeft , marginRight ,marginTop , onSelectedDate,', () => {
  const tree = renderer
    .create(
      <ADate
        borderColor={Color.environment}
        onSelectedDate={jest.fn()}
        marginRight={moderateScale(20, defaultScale)}
        marginLeft={moderateScale(20, defaultScale)}
        marginBottom={moderateScale(20, defaultScale)}
        marginTop={moderateScale(20, defaultScale)}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with disable & error text props', () => {
  const tree = renderer
    .create(
      <ADate
        disable={false}
        errorText={'wrong Date'}
        onSelectedDate={jest.fn()}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with disable & placeholder props', () => {
  const tree = renderer
    .create(
      <ADate
        disable={true}
        placeholder={'placeholder'}
        onSelectedDate={jest.fn()}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
