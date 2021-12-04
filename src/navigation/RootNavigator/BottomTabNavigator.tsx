import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenNames } from '../types';
import theme from '../../domain/constants/theme';
import TabBarIcon from '../TabBarIcon';
import HomeScreen from '../../screens/Home';
import FeedScreen from '../../screens/Feed';
import SettingsScreen from '../../screens/Settings';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={RootTabScreenNames.HOME_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: theme.color.black,
        headerShown: false,
        tabBarShowLabel: false
      }}
    >
      <BottomTab.Screen
        name={RootTabScreenNames.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-outline" color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={RootTabScreenNames.FEED_SCREEN}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="planet-outline" color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name={RootTabScreenNames.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings-outline" color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
