import React from 'react';
import {SvgProps} from 'react-native-svg';
import GiftIcon from '../../assets/svgs/GiftIcon.svg';
import CheckboxFilled from './CheckboxFilled.svg';
import CheckboxEmpty from './CheckboxEmpty.svg';
import FullStar from '../../assets/svgs/FullStar.svg';
import HalfStar from '../../assets/svgs/HalfStar.svg';
import EmptyStar from '../../assets/svgs/EmptyStar.svg';
import HidePassword from '../../assets/svgs/HidePassword.svg';
import ShowPassword from '../../assets/svgs/ShowPassword.svg';
import SelectedRadio from '../../assets/svgs/SelectedRadio.svg';
import UnselectedRadio from '../../assets/svgs/UnselectedRadio.svg';
import Close from '../../assets/svgs/Close.svg';

//=====Add icon name (your preference) over here and in Switch case
export type IconNames =
  | 'gifticon'
  | 'selectedradio'
  | 'unselectedradio'
  | 'hidepassword'
  | 'showpassword'
  | 'close'
  | 'checkboxfilled'
  | 'checkboxempty'
  | 'fullstar'
  | 'halfstar'
  | 'emptystar';

type Props = SvgProps & {name: IconNames};
const IconSVG: React.FC<Props> = props => {
  switch (props.name) {
    case 'gifticon':
      return <GiftIcon {...props} />;
    case 'checkboxempty':
      return <CheckboxEmpty {...props} />;
    case 'checkboxfilled':
      return <CheckboxFilled {...props} />;
    case 'fullstar':
      return <FullStar {...props} />;
    case 'halfstar':
      return <HalfStar {...props} />;
    case 'emptystar':
      return <EmptyStar {...props} />;
    case 'hidepassword':
      return <HidePassword {...props} />;
    case 'showpassword':
      return <ShowPassword {...props} />;
    case 'selectedradio':
      return <SelectedRadio {...props} />;
    case 'unselectedradio':
      return <UnselectedRadio {...props} />;
    case 'close':
      return <Close {...props} />;
    default:
      return null;
  }
};
export default IconSVG;
