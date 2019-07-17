import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarOptions: { showLabel: false },
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        `home`
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarOptions: { showLabel: false },
  tabBarLabel: 'Chat History',
  showLabel: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={
      `comments${focused ? '' : '-o'}`
    } />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarOptions: { showLabel: false },
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={
      `user-circle${focused ? '' : '-o'}`
    } />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
