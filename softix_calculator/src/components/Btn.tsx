import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

export const Btn = ({
  text,
  color = '#2d2d2d',
  width = false,
  action,
}: {
  text: string;
  color?: string;
  width?: boolean | number;
  action: (arg: string) => void;
}) => {
  const colorBtn = {
    backgroundColor: color,
  };
  const btnTextColor = {
    color: color == '#9b9b9b' ? 'black' : 'white',
  };

  const btnWidth = {
    width: width ? 180 : 80,
  };

  return (
    <TouchableOpacity onPress={() => console.log(text)}>
      <View style={[styles.btn, colorBtn, btnWidth]}>
        <Text style={[styles.btnText, btnTextColor]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
