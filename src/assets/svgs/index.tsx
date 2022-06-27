import React from 'react';
import {SvgProps} from 'react-native-svg';
import GiftIcon from '../../assets/svgs/GiftIcon.svg';
import CheckboxFilled from './CheckboxFilled.svg';
import CheckboxEmpty from './CheckboxEmpty.svg';

//=====Add icon name (your preference) over here and in Switch case
export type IconNames = 'gifticon' | 'CheckboxEmpty' | 'CheckboxFilled';

type Props = SvgProps & {name: IconNames};
const IconSVG: React.FC<Props> = props => {
  switch (props.name) {
    case 'gifticon':
      return <GiftIcon {...props} />;
    case 'CheckboxEmpty':
      return <CheckboxEmpty {...props} />;
    case 'CheckboxFilled':
      return <CheckboxFilled {...props} />;

    default:
      return null;
  }
};
export default IconSVG;
