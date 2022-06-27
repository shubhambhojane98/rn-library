import React from 'react';
import {SvgProps} from 'react-native-svg';
import GiftIcon from '../../assets/svgs/GiftIcon.svg';
import SelectedRadio from '../../assets/svgs/SelectedRadio.svg';
import UnselectedRadio from '../../assets/svgs/UnselectedRadio.svg';
//=====Add icon name (your preference) over here and in Switch case
export type IconNames = 'gifticon' | 'selectedradio' | 'unselectedradio';

type Props = SvgProps & {name: IconNames};
const IconSVG: React.FC<Props> = props => {
  switch (props.name) {
    case 'gifticon':
      return <GiftIcon {...props} />;
    case 'selectedradio':
      return <SelectedRadio {...props} />;
    case 'unselectedradio':
      return <UnselectedRadio {...props} />;
    default:
      return null;
  }
};
export default IconSVG;
