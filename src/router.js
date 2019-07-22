import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import ProductsScreen from './screens/Products';
import AccountsScreen from './screens/Accounts';
import BarcodeScannerScreen from './screens/BarcodeScanner';
import AuthenticateScreen from './screens/Authenticate';
import HomeScreen from './screens/Home';

export const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Products: ProductsScreen,
    Accounts: AccountsScreen,
    Barcode: BarcodeScannerScreen,
});

export default createAppContainer(TabNavigator);
