import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  headerLayoutPreset: 'center',
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
  tabBarOptions: {
    activeTintColor:'#003A70',
    style: {
      backgroundColor: '#003A70',//color you want to change,
    }, showLabel: false,
  },
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      color={tintColor}
      
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
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: '#003A70',//color you want to change
    }
  },
  tabBarLabel: 'Chat History',
  showLabel: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={
      `credit-card`
    } />
  ),
};

LinksStack.path = 'lonk';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: '#003A70',//color you want to change
    }
  },
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
