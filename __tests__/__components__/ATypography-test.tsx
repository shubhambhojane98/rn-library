import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ATypography from '../../src/components/ATypography/ATypography';
import {TypographyVariant} from '../../src/components/ATypography/ATypographyEnum';
import LightTheme from '../../src/theme/LightTheme';

it('renders correctly with  props', () => {
  const tree = renderer
    .create(
      <ATypography
        children={'Text'}
        variant={TypographyVariant.PRIMARY_SEMI_BOLD}
        color={LightTheme.colors.black}
        fontSize={16}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
