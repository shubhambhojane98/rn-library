import React from 'react';
import {SvgProps} from 'react-native-svg';
import GiftIcon from '../../assets/svgs/GiftIcon.svg';
import HidePassword from '../../assets/svgs/HidePassword.svg';
import ShowPassword from '../../assets/svgs/ShowPassword.svg';
//=====Add icon name (your preference) over here and in Switch case
export type IconNames = 'gifticon' | 'hidepassword' | 'showpassword';

type Props = SvgProps & {name: IconNames};
const IconSVG: React.FC<Props> = props => {
  switch (props.name) {
    case 'gifticon':
      return <GiftIcon {...props} />;
    case 'hidepassword':
      return <HidePassword {...props} />;
    case 'showpassword':
      return <ShowPassword {...props} />;
    default:
      return null;
  }
};
export default IconSVG;
