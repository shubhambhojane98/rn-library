import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ATextInput from '../ATextInput/ATextInput';
import {Color} from '../../theme';
import {defaultScale} from '../../utils/Common';
import AModal from '../AModal/AModal';

interface Prop {
  data: Array<any>;
  placeholder: string;
  height?: number;
  borderColor?: string;
  disable?: boolean;
  errorText?: string;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  renderItemCustom?: (_: any) => void;
}

const defaultDropDownHeight = 120;
const defaultMargin = 0;

const ADropDown: React.FC<Prop> = ({
  data,
  height = defaultDropDownHeight,
  borderColor,
  placeholder,
  disable,
  errorText,
  marginBottom = defaultMargin,
  marginLeft = defaultMargin,
  marginRight = defaultMargin,
  marginTop = defaultMargin,
  renderItemCustom,
}) => {
  const toggleRef = React.useRef<any>();

  const [selectedItem, setSelectedItem] = useState<any>();
  const [showOption, setShowOption] = useState(false);

  const [dropDownWidth, setDropDownWidth] = React.useState(undefined);
  const [dropDownTop, setDropDownTop] = React.useState<number | undefined>(
    undefined,
  );
  const [dropDownLeft, setDropDownLeft] = React.useState<number | undefined>(
    undefined,
  );
  const [icon, setIcon] = useState('downarrow');
  const calculatedPadding = renderItemCustom ? 0 : 12;

  const stylesWithProps = styles({
    dropDownTop,
    dropDownLeft,
    dropDownWidth,
    height,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    calculatedPadding,
  });

  const onSelect = (item: any) => {
    setSelectedItem(item);
    setShowOption(false);
  };

  const renderItem = (item: any) => (
    <TouchableOpacity
      onPress={() => {
        setIcon('downarrow');
        onSelect(item);
      }}>
      {renderItemCustom ? (
        <>{renderItemCustom(item)}</>
      ) : (
        <Text style={stylesWithProps.dropDownItem}>{item.value}</Text>
      )}
    </TouchableOpacity>
  );

  const toggleDropdown = () => {
    setIcon('close');
    setShowOption(!showOption);
    toggleRef.current.measure(
      (_: any, __: any, width: any, ___: any, px: any, py: any) => {
        if (py > 640) {
          setDropDownWidth(width);
          setDropDownTop(py - 150);
          setDropDownLeft(px - 20);
        } else {
          setDropDownWidth(width);
          setDropDownTop(py + 35);
          setDropDownLeft(px - 20);
        }
      },
    );
  };

  return (
    <View
      ref={toggleRef}
      renderToHardwareTextureAndroid
      style={stylesWithProps.containerStyle}>
      <View>
        <ATextInput
          placeholder={placeholder}
          editable={false}
          value={selectedItem ? selectedItem.value : ''}
          disable={disable}
          errorText={errorText}
          rightIcon={icon}
          borderColor={borderColor}
          marginBottom={errorText ? 5 : 0}
          marginLeft={0}
          marginRight={0}
          marginTop={0}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={toggleDropdown}
          style={stylesWithProps.dropDownButton}
        />
      </View>
      {!disable && dropDownTop && (
        <AModal
          backgroundColor="transparent"
          transparentOverlay={true}
          animationType="fade"
          visible={showOption}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setShowOption(false);
              setIcon('downarrow');
            }}
            style={[
              stylesWithProps.dropDownContent,
              {...stylesWithProps.dropDownBackdrop},
            ]}>
            <View
              style={[
                stylesWithProps.dropDownContent,
                stylesWithProps.dropDownBackground,
              ]}>
              <FlatList
                data={data}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator
                nestedScrollEnabled={true}
              />
            </View>
          </TouchableOpacity>
        </AModal>
      )}
    </View>
  );
};

const styles = (props: {
  dropDownTop?: number;
  dropDownLeft?: any;
  dropDownWidth?: any;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  calculatedPadding: number;
}) =>
  StyleSheet.create({
    containerStyle: {
      marginTop: props.marginTop,
      marginRight: props.marginRight,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
    },
    dropDownContent: {
      padding: moderateScale(props.calculatedPadding, defaultScale),
      justifyContent: 'center',
      shadowColor: Color.black,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 10,
    },
    dropDownBackdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    dropDownBackground: {
      backgroundColor: Color.white,
      position: 'absolute',
      top: props.dropDownTop,
      left: props.dropDownLeft,
      width: props.dropDownWidth,
      height: moderateScale(
        props.height || defaultDropDownHeight,
        defaultScale,
      ),
    },
    dropDownItem: {
      textAlign: 'left',
      height: moderateScale(30, defaultScale),
      justifyContent: 'center',
    },
    dropDownButton: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  });

export default ADropDown;
