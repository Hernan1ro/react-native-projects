import React from 'react';
import {CounterScreen} from './src/screens/CounterScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
import {PositionScreen} from './src/screens/PositionScreen';
import {HelloWorldScreen} from './src/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};
