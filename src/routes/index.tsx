import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../container';
import HomeStack from './Home';

export default () => (
  <Provider store={store}>
    {/* <PersistGate
      loading={<ActivityIndicator size="large" color="#00ff00" />}
      persistor={persistor}> */}
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
    {/* </PersistGate> */}
  </Provider>
);
