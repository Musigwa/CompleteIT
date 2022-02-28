import React from 'react';
// import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './container';
import { store } from './container';
import MainNavigator from './routes';

export default () => (
  <Provider store={store}>
    {/* <PersistGate
      loading={<ActivityIndicator size="large" color="#00ff00" />}
      persistor={persistor}> */}
    <MainNavigator />
    {/* </PersistGate> */}
  </Provider>
);
