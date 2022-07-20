import { Platform, PlatformOSType } from 'react-native';
import { Fonts } from '../utils/types';


export default function configureFonts(config?: {
    [platform in PlatformOSType | 'default']?: Fonts;
  }): Fonts {
    const fonts = Platform.select({ ...config }) as Fonts;
    return fonts;
  }