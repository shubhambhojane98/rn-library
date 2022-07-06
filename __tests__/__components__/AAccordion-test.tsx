import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AAccordion from '../../src/components/AAccordion/AAccordion';
import ATypography from '../../src/components/ATypography/ATypography';

const listData = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet',
    component: (
      <ATypography>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam.
      </ATypography>
    ),
  },
  {
    id: '2',
    title: 'Sed do eiusmod tempor incididunt ut labore',
    component: (
      <ATypography>
        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim.
      </ATypography>
    ),
  },
  {
    id: '3',
    title: 'Lorem enim ad minim veniam',
    component: (
      <ATypography>
        Do eiusmod tempor incididunt ut labor dolore magna aliqua. Ut enim minim
        veniam.
      </ATypography>
    ),
  },
];

it('renders correctly with default props', () => {
  const tree = renderer.create(<AAccordion data={listData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
