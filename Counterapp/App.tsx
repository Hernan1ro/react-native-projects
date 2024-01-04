import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
        }}>
        Softix app
      </Text>
    </View>
  );
};

export default App;
