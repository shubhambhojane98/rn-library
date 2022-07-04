import React, {FC} from 'react';
import {View, StyleSheet, I18nManager} from 'react-native';
import ATypography from '../ATypography/ATypography';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Color} from '../../theme';
import {TypographyVariant} from '../ATypography/ATypographyEnum';

interface Props {
  screens: ScreenData[];
  tabBarScrollEnabled?: boolean;
  initialRouteName?: string;
  containerHeight?: any;
}
interface ScreenData {
  name: string;
  component: any;
}

const Tab = createMaterialTopTabNavigator();

const ATopBar: FC<Props> = ({
  screens,
  initialRouteName,
  tabBarScrollEnabled,
  containerHeight,
}) => {
  let initialRouteNameRTL = initialRouteName;
  let screensRTL = screens;
  if (I18nManager.isRTL) {
    initialRouteNameRTL = screens[screens.length - 1].name;
    screensRTL = screens.reverse();
  }
  return (
    <View style={styles({containerHeight}).container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={initialRouteNameRTL || screens[0].name}
          screenOptions={{
            tabBarScrollEnabled: tabBarScrollEnabled,
            tabBarIndicatorStyle: {backgroundColor: Color.backgroundColor},
            tabBarActiveTintColor: Color.textColor,
            tabBarInactiveTintColor: Color.textColor,
          }}>
          {screensRTL.map(screenData => {
            return (
              <Tab.Screen
                key={screenData.name}
                name={screenData.name}
                component={screenData.component}
                options={({navigation}) => ({
                  tabBarLabel: () => {
                    const {isFocused} = navigation;
                    return (
                      <ATypography
                        children={screenData.name}
                        variant={
                          isFocused()
                            ? TypographyVariant.PRIMARY_BOLD
                            : TypographyVariant.PRIMARY
                        }
                        color={Color.black}
                        fontSize={16}
                      />
                    );
                  },
                })}
              />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default ATopBar;

const styles = (props: {containerHeight: number}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: props.containerHeight || '100%',
    },
  });
