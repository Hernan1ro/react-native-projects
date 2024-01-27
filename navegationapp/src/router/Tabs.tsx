import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1screen} from '../screens/Tab1screen';
import {Tab2screen} from '../screens/Tab2screen';
import {Tab3screen} from '../screens/Tab3screen';
import {StackNavigator} from './StackNavigator';
import {Platform, Text} from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createBottomTabNavigator();
const TabAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS != 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

function TabsAndroid() {
  return (
    <TabAndroid.Navigator>
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1screen}
      />
      <TabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2screen}
      />
      <TabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
}

export const TabsIOS = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#efb810',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {elevation: 0},
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
