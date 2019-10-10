import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Navigators or Screens
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigation'
import AppLoading from '../screens/AppLoading'

export default createAppContainer(
  createSwitchNavigator(
    {
      AppLoading,
      Auth: AuthNavigator,
      Main: MainTabNavigator,
    },
    {initialRouteName: 'AppLoading'},
  ),
);
