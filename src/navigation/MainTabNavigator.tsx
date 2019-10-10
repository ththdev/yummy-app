import * as React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  createStackNavigator,
  NavigationStackProp,
  NavigationStackOptions,
} from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
import colors from '../config/colors';

// Containers
import Today from '../containers/today';
import Liked from '../containers/liked';
import Recipe from '../containers/recipe';
import Cart from '../containers/cart';
import Profile from '../containers/profile';

interface Props {
  focused: boolean;
  navigation: NavigationStackProp;
}

const TodayStack = createStackNavigator({Today}, {headerMode: 'none'});
const LikedStack = createStackNavigator({Liked}, {headerMode: 'none'});
const RecipeStack = createStackNavigator({Recipe}, {headerMode: 'none'});
const CartStack = createStackNavigator({Cart}, {headerMode: 'none'});
const ProfileStack = createStackNavigator({Profile}, {headerMode: 'none'});

TodayStack.navigationOptions = ({navigation}: Props) => ({
  tabBarLabel: 'Today',
  tabBarIcon: ({focused}: Props) => (
    <TabBarIcon focused={focused} name="clipboard" />
  ),
  tabBarVisible: navigation.state.index === 0,
});

LikedStack.navigationOptions = {
  tabBarLabel: 'Liked',
  tabBarIcon: ({focused}: Props) => (
    <TabBarIcon focused={focused} name="heart" />
  ),
};

RecipeStack.navigationOptions = {
  tabBarLabel: 'Recipe',
  tabBarIcon: ({focused}: Props) => (
    <TabBarIcon focused={focused} name="book-open" />
  ),
};

CartStack.navigationOptions = {
  tabBarLabel: 'Bag',
  tabBarIcon: ({focused}: Props) => (
    <TabBarIcon focused={focused} name="shopping-bag" />
  ),
};

ProfileStack.navigationOptions = ({navigation}: Props) => ({
  tabBarLabel: 'Profile',
  tabBarIcon: ({focused}: Props) => (
    <TabBarIcon focused={focused} name="user" />
  ),
  tabBarVisible: navigation.state.index === 0,
});

const tabNavigator = createBottomTabNavigator(
  {
    TodayStack,
    LikedStack,
    RecipeStack,
    CartStack,
    ProfileStack,
  },
  {
    tabBarOptions: {activeTintColor: colors.tint},
  },
);

export default tabNavigator;
