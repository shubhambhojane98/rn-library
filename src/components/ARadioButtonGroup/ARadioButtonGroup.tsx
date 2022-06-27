import {View, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import ARadioButton from '../ARadioButton/ARadioButton';

interface RadioData {
  id: number;
  value: string;
}

interface Props {
  data: RadioData[];
  onSelectValue: (radio: RadioData) => void;
}

const ARadioButtonGroup: FC<Props> = ({data, onSelectValue}) => {
  const [selectedItem, setSelectedItem] = useState({id: -1});

  const selectHandler = (item: any) => {
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
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ARadioButtonGroup;
