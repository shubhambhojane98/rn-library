import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import React from 'react';
import ATopBar from '../components/ATopBar/ATopBar';
import ATypography from '../components/ATypography/ATypography';
import {TypographyVariant} from '../components/ATypography/ATypographyEnum';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function TourScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Tour!</Text>
    </View>
  );
}

function FashionScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Fashion!</Text>
    </View>
  );
}

const ATopBarDemo = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          Modal with default props
        </ATypography>
        <ATopBar
          containerHeight={200}
          screens={[
            {
              name: 'Home',
              component: HomeScreen,
            },
            {
              name: 'Settings',
              component: SettingsScreen,
            },
          ]}
        />
        <ATypography
          variant={TypographyVariant.PRIMARY_BOLD}
          style={{marginVertical: 20}}>
          {`Modal with scroll enabled & initialRouteName`}
        </ATypography>
        <ATopBar
          initialRouteName="Settings"
          tabBarScrollEnabled={true}
          containerHeight={300}
          screens={[
            {
              name: 'Home',
              component: HomeScreen,
            },
            {
              name: 'Settings',
              component: SettingsScreen,
            },
            {
              name: 'Profile',
              component: ProfileScreen,
            },
            {
              name: 'Tour',
              component: TourScreen,
            },
            {
              name: 'Fashion',
              component: FashionScreen,
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ATopBarDemo;
