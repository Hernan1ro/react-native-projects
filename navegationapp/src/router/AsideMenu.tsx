import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Page2Screen} from '../screens/Page2Screen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const AsideMenu = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        // drawerPosition: 'right',
        drawerType: width >= 600 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Page2Screen" component={Page2Screen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
