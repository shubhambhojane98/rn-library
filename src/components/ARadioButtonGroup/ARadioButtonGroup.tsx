import {View, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React, {FC, useState} from 'react';
import ARadioButton from '../ARadioButton/ARadioButton';

interface RadioData {
  id: number;
  value: string;
  disable?: boolean;
}

interface Props {
  data: RadioData[];
  onSelectValue: (radio: RadioData) => void;
  selectedRadio?: (props: {size: number}) => React.ReactNode;
  unselectedRadio?: (props: {size: number}) => React.ReactNode;
  boxStyle?: StyleProp<ViewStyle>;
  selectedIconColor?: string;
  unselectedIconColor?: string;
}

const ARadioButtonGroup: FC<Props> = ({
  data,
  onSelectValue,
  selectedRadio,
  unselectedRadio,
  boxStyle,
  selectedIconColor,
  unselectedIconColor,
}) => {
  const [selectedItem, setSelectedItem] = useState({id: -1});

  const selectHandler = (item: any) => {
    if (item.disable) {
      return;
    }
    setSelectedItem(item);
    onSelectValue(item);
  };

  return (
    <View>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => selectHandler(item)}
            activeOpacity={1}>
            <ARadioButton
              label={item.value}
              selected={selectedItem.id === item.id}
              disable={item.disable}
              selectedRadio={selectedRadio}
              unselectedRadio={unselectedRadio}
              selectedIconColor={selectedIconColor}
              unselectedIconColor={unselectedIconColor}
              boxStyle={boxStyle}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ARadioButtonGroup;
