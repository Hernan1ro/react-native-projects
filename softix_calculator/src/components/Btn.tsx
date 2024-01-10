import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

export const Btn = ({
  text,
  color = '#2d2d2d',
  textColor = 'black',
  width = false,
}: {
  text: string;
  color?: string;
  textColor?: string;
  width?: boolean | number;
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
    <TouchableOpacity>
      <View style={[styles.btn, colorBtn, btnWidth]}>
        <Text style={[styles.btnText, btnTextColor]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
