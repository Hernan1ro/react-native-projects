import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1screen} from '../screens/Tab1screen';
import {Tab2screen} from '../screens/Tab2screen';
import {Tab3screen} from '../screens/Tab3screen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1Screen" component={Tab1screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2screen} />
      <Tab.Screen name="Tab3Screen" component={Tab3screen} />
    </Tab.Navigator>
  );
};
