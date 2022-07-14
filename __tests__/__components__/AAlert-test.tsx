import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AAlert from '../../src/components/AAlert/AAlert';
import {Color} from '../../src/theme';

it('renders correctly with default props', () => {
  const tree = renderer
    .create(
      <AAlert
        visible={true}
        title={'Title'}
        onPressYes={jest.fn()}
        onDismiss={jest.fn()}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with   Alert with backgroundColor, visible, borderRadius, animationType, title, titleColor, subTitle, description, onPressYes, onDismiss,', () => {
  const tree = renderer
    .create(
      <AAlert
        visible={true}
        title={'Title'}
        titleColor={'red'}
        onPressYes={jest.fn()}
        subTitle={'Sub_Title'}
        description={'Description'}
        onDismiss={jest.fn()}
        backgroundColor={Color.healthcare}
        borderRadius={8}
        animationType={'fade'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with visible false', () => {
  const tree = renderer
    .create(
      <AAlert
        visible={false}
        title={'Title'}
        onPressYes={jest.fn()}
        onDismiss={jest.fn()}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
