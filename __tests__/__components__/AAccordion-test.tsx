import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AAccordion from '../../src/components/AAccordion/AAccordion';
import ATypography from '../../src/components/ATypography/ATypography';

const line1 =
  'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

const line2 =
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Consectetur adipiscing elit.';

it('renders correctly with default props', () => {
  const tree = renderer
    .create(
      <AAccordion id="1" title="Uncontrolled Accordion">
        <ATypography>{line1}</ATypography>
      </AAccordion>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with icon & expanded', () => {
  const tree = renderer
    .create(
      <AAccordion
        id="1"
        title="Uncontrolled Accordion"
        leftIconName="fullstar"
        expanded={true}>
        <ATypography>{line1}</ATypography>
      </AAccordion>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
