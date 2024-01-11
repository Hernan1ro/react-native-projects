import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View>
          <Text>Softix app</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
