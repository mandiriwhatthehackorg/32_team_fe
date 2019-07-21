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

import AddTransaction2 from '../screens/AddTransaction2';
import AddTransaction3 from '../screens/AddTransaction3';
import AddTransaction4 from '../screens/AddTransaction4';

import AddTransaction5 from '../screens/AddTransaction5';
import AddTransaction6 from '../screens/AddTransaction6';

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
    AddTransaction2: {
      screen: AddTransaction2
    },
    AddTransaction3: {
      screen: AddTransaction3
    },
    AddTransaction4: {
      screen: AddTransaction4
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
    AddTransaction5: {
      screen: AddTransaction5
    },
    AddTransaction6: {
      screen: AddTransaction6
    },
    // Add Rekening
    // List Deposito
    // Add Deposito 
    // List Pinjaman
    // Add Pinjaman 
    
  })
);
