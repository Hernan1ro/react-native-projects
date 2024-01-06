import React from 'react';
import {CounterScreen} from './src/screens/CounterScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
// import {HelloWorldScreen} from './src/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};
