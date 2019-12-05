import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import Store from './config/store';
import { PersistGate } from 'redux-persist/integration/react'

EStyleSheet.build({
  $primaryBlue: '#007AFF',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#000000',
  $darkText: '#868686',
  $black: '#000000',
});

export default () => (
  <Provider store={Store.store}>
    <PersistGate loading={null} persistor={Store.persistor}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />

    </AlertProvider>
    </PersistGate>
  </Provider>
);
