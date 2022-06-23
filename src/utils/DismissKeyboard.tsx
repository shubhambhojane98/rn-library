import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
//=========for dismissing the keyboard when taps on the screen =========
interface DismissKeyBoardProps {
  children: any;
}
const DismissKeyBoard: React.FC<DismissKeyBoardProps> = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};
export {DismissKeyBoard};
