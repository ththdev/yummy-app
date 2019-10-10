import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// Navigators or Screens
import MainTabNavigator from './MainTabNavigator';
import Start from '../screens/Auth/Start';

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: MainTabNavigator,
      Start,
    },
    {initialRouteName: 'Start'},
  ),
);
