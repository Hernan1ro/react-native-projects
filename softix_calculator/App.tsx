/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {styles} from './src/theme/appTheme';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
}

export default App;
