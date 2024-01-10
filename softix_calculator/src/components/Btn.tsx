import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

export const Btn = ({
  text,
  color = '#2d2d2d',
}: {
  text: string;
  color?: string;
}) => {
  const colorBtn = {
    backgroundColor: color,
  };
  return (
    <View style={[styles.btn, colorBtn]}>
      <Text style={styles.btnText}>{text}</Text>
    </View>
  );
};
