import React from 'react';
import {FlatList} from 'react-native';

const AVirtualizedList: React.FC = ({children}) => {
  return (
    <FlatList
      data={[]}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => '' + index}
      renderItem={null}
      bounces={false}
      ListHeaderComponent={<>{children}</>}
    />
  );
};

export default AVirtualizedList;
