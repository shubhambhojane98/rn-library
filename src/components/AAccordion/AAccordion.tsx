import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import ATypography from '../ATypography/ATypography';
import {TypographyVariant} from '../ATypography/ATypographyEnum';
import {Color} from '../../theme';
import IconSVG from '../../assets/svgs';

interface AccourdionItem {
  id: string | number;
  title: string;
  component: any;
}

interface Prop {
  data: AccourdionItem[];
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  separatorColor?: string;
}

const defaultMargin = 0;

const AAccordion: React.FC<Prop> = ({
  data,
  marginTop = defaultMargin,
  marginBottom = defaultMargin,
  marginLeft = defaultMargin,
  marginRight = defaultMargin,
  separatorColor = Color.greyOpac20,
}) => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState({id: ''});

  const stylesWithProps = styles({
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    separatorColor,
  });

  const toggleExpand = (item: any) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
    setSelectedItem(item);
  };

  return (
    <View>
      {data.map(item => {
        return (
          <View key={item.id}>
            <TouchableOpacity
              style={stylesWithProps.row}
              onPress={() => toggleExpand(item)}
              activeOpacity={1}>
              <ATypography
                children={item.title}
                fontSize={16}
                variant={TypographyVariant.PRIMARY_BOLD}
                style={stylesWithProps.titleStyle}
              />
              <IconSVG name={'downarrow'} />
            </TouchableOpacity>
            <View style={stylesWithProps.separator} />
            {selectedItem.id === item.id && (
              <View style={stylesWithProps.child}>{item.component}</View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default AAccordion;

const styles = (props: {
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  separatorColor?: string;
}) =>
  StyleSheet.create({
    title: {
      fontSize: 12,
      fontFamily: 'DMSans-Medium',
      color: Color.grey,
      width: '80%',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      minHeight: 26,
      paddingVertical: 12,
      alignItems: 'center',
      backgroundColor: 'transparent',
      marginTop: props.marginTop,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
    },
    titleStyle: {flex: 0.95},
    separator: {height: 1, backgroundColor: props.separatorColor},
    child: {
      backgroundColor: 'transparent',
      padding: 0,
      marginTop: props.marginTop,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
    },
  });
