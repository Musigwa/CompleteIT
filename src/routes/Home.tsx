import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { PROGRESS } from '../constants';
import Progress from '../screens';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name={PROGRESS} component={Progress} />
  </Stack.Navigator>
);
