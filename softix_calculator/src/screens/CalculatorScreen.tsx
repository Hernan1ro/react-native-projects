import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>200.000</Text>
      <Text style={styles.text}>150.000</Text>

      <View>
        <View style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </View>
      </View>
    </View>
  );
};
