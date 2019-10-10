import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Navigators or Screens
import MainTabNavigator from './MainTabNavigator';
import Start from '../screens/Auth/Start';
import Login from '../screens/Auth/Login';

const AuthStack = createStackNavigator(
  {
    Start,
    Login,
  },
  {headerMode: 'none'},
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Main: MainTabNavigator,
    },
    {initialRouteName: 'Auth'},
  ),
);
