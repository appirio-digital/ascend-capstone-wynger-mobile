import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'native-base'

import Accounts from './screens/Accounts';
import Products from './screens/Products';

import LoginScreen from './screens/Login';
import SettingsScreen from './screens/Settings';
import AccountDetailsScreen from './screens/AccountDetail';
import ProductDetailsScreen from './screens/ProductDetail';
import CaseDetailsScreen from './screens/CaseDetail';
import ContactDetailsScreen from './screens/ContactDetail';
import OpportunityDetailsScreen from './screens/OpportunityDetail';

import Colors from './constants/Colors';

const AccountStackNavigator = createStackNavigator({
  Accounts: {
    screen: Accounts,
    navigationOptions: { header: null }
  },
  AccountDetails: {
    screen: AccountDetailsScreen,
    navigationOptions: { header: null, tabBarVisible: false }
  },
  ContactDetails: {
    screen: ContactDetailsScreen,
    navigationOptions: { header: null, tabBarVisible: false }
  },
  OpportunityDetails: {
    screen: OpportunityDetailsScreen,
    navigationOptions: { header: null, tabBarVisible: false }
  },
  CaseDetails: {
    screen: CaseDetailsScreen,
    navigationOptions: { header: null }
  }
}, {
  navigationOptions: ({ navigation }) => ({ // disables the tab bar for the AccountDetails route
    tabBarVisible: navigation.state.index === 0 
  })
});

const ProductStackNavigator = createStackNavigator({
  Products: {
    screen: Products,
    navigationOptions: { header: null }
  },
  ProductDetails: {
    screen: ProductDetailsScreen,
    navigationOptions: { header: null, tabBarVisible: false }
  },
  CaseDetails: {
    screen: CaseDetailsScreen,
    navigationOptions: { header: null }
  },
}, {
  navigationOptions: ({ navigation }) => ({ // disables the tab bar for the AccountDetails route
    tabBarVisible: navigation.state.index === 0 
  })
});

export const TabNavigator = createBottomTabNavigator({
  Accounts: AccountStackNavigator,
  Products: ProductStackNavigator,
  Settings: SettingsScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName = '';

      if (routeName === 'Products')      iconName = 'ios-pricetags';
      else if (routeName === 'Accounts') iconName = 'ios-people';
      else if (routeName === 'Settings')  iconName = 'ios-options';
      else iconName = 'ios-home'

      return (
        <Icon 
          type="Ionicons" 
          name={iconName} 
          color={tintColor} 
          style={{ color: tintColor }}
        />
      );
    }
  }),
  tabBarOptions: {
    activeTintColor: Colors.wyngerRed,
    inactiveTintColor: Colors.wyngerGrey,
    style: { height: 60 }
  },
});

const AppStackNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Application: TabNavigator
});

export default createAppContainer(AppStackNavigator);
