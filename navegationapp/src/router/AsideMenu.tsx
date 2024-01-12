import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {PersonScreen} from '../screens/PersonScreen';
import {Page1Screen} from '../screens/Page1Screen';
import {Page2Screen} from '../screens/Page2Screen';

const Drawer = createDrawerNavigator();

export const AsideMenu = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="PersonScreen" component={PersonScreen} /> */}
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Page2Screen" component={Page2Screen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
