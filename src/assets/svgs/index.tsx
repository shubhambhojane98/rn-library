import React from 'react';
import {SvgProps} from 'react-native-svg';
import GiftIcon from '../../assets/svgs/GiftIcon.svg';
import FullStar from '../../assets/svgs/FullStar.svg';
import HalfStar from '../../assets/svgs/HalfStar.svg';
import EmptyStar from '../../assets/svgs/EmptyStar.svg';
//=====Add icon name (your preference) over here and in Switch case
export type IconNames = 'gifticon' | 'fullstar' | 'halfstar' | 'emptystar';

type Props = SvgProps & {name: IconNames};
const IconSVG: React.FC<Props> = props => {
  switch (props.name) {
    case 'gifticon':
      return <GiftIcon {...props} />;
    case 'fullstar':
      return <FullStar {...props} />;
    case 'halfstar':
      return <HalfStar {...props} />;
    case 'emptystar':
      return <EmptyStar {...props} />;
    default:
      return null;
  }
};
export default IconSVG;
