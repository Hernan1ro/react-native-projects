import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1screen} from '../screens/Tab1screen';
import {Tab2screen} from '../screens/Tab2screen';
import {Tab3screen} from '../screens/Tab3screen';
import {StackNavigator} from './StackNavigator';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: '#efb810',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {elevation: 0},
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1screen}
      /> */}
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
