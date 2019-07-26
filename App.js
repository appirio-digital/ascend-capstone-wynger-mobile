import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './src/router';
import store from './src/store';

export default function App() {
  let appStore = store.createStore();
  return (
    <Provider store={appStore}>
      <AppNavigator />
    </Provider>
  );
}

