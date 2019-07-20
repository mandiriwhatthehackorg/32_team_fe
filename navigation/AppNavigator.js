import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import Onboarding from '../screens/OnboardingScreen';
import LoginRegister from '../screens/LoginRegister';

import AddTransaction from '../screens/AddTransaction';
import DetailProduct from '../screens/DetailProduct';
import DetailPromo from '../screens/DetailPromo';

import ConnectToBank from '../screens/ConnectToBank';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Onboarding: {
      screen: Onboarding
    },
    Main: MainTabNavigator,
    LoginRegister: {
      screen: LoginRegister
    },
    ChatRoom: {
      screen: ChatRoomScreen
    },
    AddTransaction: {
      screen: AddTransaction
    },
    DetailProduct: {
      screen: DetailProduct
    },
    DetailPromo: {
      screen: DetailPromo
    },
    ConnectToBank: {
      screen: ConnectToBank
    },
    // Add Rekening
    // List Deposito
    // Add Deposito 
    // List Pinjaman
    // Add Pinjaman 
    
  })
);
