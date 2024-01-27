import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export const Tab1screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  );
};
