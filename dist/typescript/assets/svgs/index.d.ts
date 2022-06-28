import React from 'react';
import { SvgProps } from 'react-native-svg';
export declare type IconNames = 'gifticon' | 'selectedradio' | 'unselectedradio' | 'hidepassword' | 'showpassword' | 'close' | 'checkboxfilled' | 'checkboxempty' | 'fullstar' | 'halfstar' | 'emptystar';
declare type Props = SvgProps & {
    name: IconNames;
};
declare const IconSVG: React.FC<Props>;
export default IconSVG;
