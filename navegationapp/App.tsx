import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/router/StackNavigator';
import {AsideMenu} from './src/router/AsideMenu';
import {CustomMenu} from './src/router/CustomMenu';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <AsideMenu /> */}
      <CustomMenu />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
}

export default App;
