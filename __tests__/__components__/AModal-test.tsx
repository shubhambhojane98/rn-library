import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AModal from '../../src/components/AModal/AModal';
import ATypography from '../../src/components/ATypography/ATypography';
import {TypographyVariant} from '../../src/components/ATypography/ATypographyEnum';
import {Color} from '../../src/theme';

it('renders correctly with default props', () => {
  const tree = renderer
    .create(
      <AModal
        visible={true}
        onDismiss={jest.fn()}
        closeButton={true}
        backgroundColor={Color.white}
        borderRadius={8}
        animationType={'fade'}
        children={
          <>
            <ATypography variant={TypographyVariant.PRIMARY_BOLD}>
              {' '}
              Modal content!
            </ATypography>
          </>
        }
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with transparent', () => {
  const tree = renderer
    .create(
      <AModal
        visible={true}
        onDismiss={jest.fn()}
        closeButton={true}
        backgroundColor={Color.white}
        borderRadius={8}
        transparentOverlay={true}
        children={
          <>
            <ATypography variant={TypographyVariant.PRIMARY_BOLD}>
              {' '}
              Modal content!
            </ATypography>
          </>
        }
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with closeButton hidden', () => {
  const tree = renderer
    .create(
      <AModal
        visible={true}
        onDismiss={jest.fn()}
        backgroundColor={Color.white}
        borderRadius={8}
        closeButton={false}
        children={
          <>
            <ATypography variant={TypographyVariant.PRIMARY_BOLD}>
              {' '}
              Modal content!
            </ATypography>
          </>
        }
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
