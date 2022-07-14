import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ATypography from '../../src/components/ATypography/ATypography';
import {TypographyVariant} from '../../src/components/ATypography/ATypographyEnum';
import {Color} from '../../src/theme';

it('renders correctly with  props', () => {
  const tree = renderer
    .create(
      <ATypography
        children={'Text'}
        variant={TypographyVariant.PRIMARY_SEMI_BOLD}
        color={Color.black}
        fontSize={16}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
