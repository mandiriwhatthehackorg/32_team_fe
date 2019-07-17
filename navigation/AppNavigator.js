import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import Onboarding from '../screens/OnboardingScreen';
import LoginRegister from '../screens/LoginRegister';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Onboarding: {
      screen: Onboarding
    },
    LoginRegister: {
      screen: LoginRegister
    },
    Main: MainTabNavigator,
    ChatRoom: {
      screen: ChatRoomScreen
    }
  })
);
