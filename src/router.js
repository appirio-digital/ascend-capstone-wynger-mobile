import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base'

import Accounts from './containers/Accounts';
import Products from './containers/Products';

import ProductsScreen from './screens/Products';
import AccountDetailsScreen from './screens/AccountDetail';
import ProductDetailsScreen from './screens/ProductDetail';
import CaseDetailsScreen from './screens/CaseDetail';
import ContactDetailsScreen from './screens/ContactDetail';
import OpportunityDetailsScreen from './screens/OpportunityDetail';
import BarcodeScannerScreen from './screens/BarcodeScanner';

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
    screen: ProductsScreen,
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
  Products: ProductStackNavigator,
  Accounts: AccountStackNavigator,
  Barcode: BarcodeScannerScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName = '';

      if (routeName === 'Products')      iconName = 'ios-pricetags';
      else if (routeName === 'Accounts') iconName = 'ios-people';
      else if (routeName === 'Barcode')  iconName = 'ios-qr-scanner';
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
})

export default createAppContainer(TabNavigator);
