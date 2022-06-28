import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ADropDown from '../../src/components/ADropDown/ADropDown';
import ATypography from '../../src/components/ATypography/ATypography';
import {TypographyVariant} from '../../src/components/ATypography/ATypographyEnum';

const user = [
  {id: 2, title: 'ritesh', value: 'ritesh'},
  {id: 3, title: 'amit', value: 'amit'},
  {id: 4, title: 'rohan', value: 'rohan'},
  {id: 6, title: 'virat', value: 'virat'},
  {id: 7, title: 'rohit', value: 'rohit'},
  {id: 8, title: 'rahul', value: 'rahul'},
];

it('renders correctly with default props', () => {
  const tree = renderer
    .create(<ADropDown placeholder="placeholder" data={user} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with custom render', () => {
  const tree = renderer
    .create(
      <ADropDown
        placeholder="placeholder"
        data={user}
        renderItemCustom={item => {
          return (
            <ATypography
              variant={TypographyVariant.PRIMARY_BOLD}
              style={{
                padding: 20,
              }}>
              {item.title}
            </ATypography>
          );
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with disabled & custom height', () => {
  const tree = renderer
    .create(
      <ADropDown
        placeholder="placeholder"
        data={user}
        disable={true}
        height={180}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
