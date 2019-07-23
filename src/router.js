import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base'

import ProductsScreen from './screens/Products';
import AccountsScreen from './screens/Accounts';
import BarcodeScannerScreen from './screens/BarcodeScanner';
//import AuthenticateScreen from './screens/Authenticate';

export const TabNavigator = createBottomTabNavigator({
  //Auth: AuthenticateScreen,
  Products: ProductsScreen,
  Accounts: AccountsScreen,
  Barcode: BarcodeScannerScreen,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName = '';

      if (routeName === 'Products')      iconName = 'ios-pricetags';
      else if (routeName === 'Accounts') iconName = 'ios-people';
      else if (routeName === 'Barcode')  iconName = 'ios-qr-scanner';

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
    activeTintColor: 'red',
    inactiveTintColor: 'black',
    style: {
      height: 60
    }
  },
})

export default createAppContainer(TabNavigator);
