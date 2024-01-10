import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {Btn} from '../components/Btn';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>200.000</Text>
      <Text style={styles.text}>150.000</Text>

      <View style={styles.row}>
        <Btn text="C" color="#9b9b9b" />
        <Btn text="+/-" color="#9b9b9b" />
        <Btn text="del" color="#9b9b9b" />
        <Btn text="/" color="#ff9427" />
      </View>
    </View>
  );
};
