import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AVirtualizedList from '../../src/components/AVirtualizedList/AVirtualizedList';
import AButton from '../../src/components/AButton/AButton';
import ATypography from '../../src/components/ATypography/ATypography';
import {Color} from '../../src/theme';
import {Alert} from 'react-native';

it('renders correctly with default prop', () => {
  const tree = renderer
    .create(
      <AVirtualizedList>
        <ATypography fontSize={12}>{'Virutalized List'}</ATypography>
        <AButton
          title={'Simple Button'}
          onPress={() => Alert.alert('button Pressed')}
          width={290}
          color={Color.blue}
          borderRadius={49}
        />
      </AVirtualizedList>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
