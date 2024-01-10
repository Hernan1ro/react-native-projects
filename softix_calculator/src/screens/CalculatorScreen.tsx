import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import {Btn} from '../components/Btn';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>200.000</Text>
      <Text style={styles.text}>150.000</Text>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="C" color="#9b9b9b" />
        <Btn text="+/-" color="#9b9b9b" />
        <Btn text="del" color="#9b9b9b" />
        <Btn text="/" color="#ff9427" />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="7" />
        <Btn text="8" />
        <Btn text="9" />
        <Btn text="X" color="#ff9427" />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="4" />
        <Btn text="5" />
        <Btn text="6" />
        <Btn text="-" color="#ff9427" />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="1" />
        <Btn text="2" />
        <Btn text="3" />
        <Btn text="+" color="#ff9427" />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="0" width />
        <Btn text="." />
        <Btn text="=" color="#ff9427" />
      </View>
    </View>
  );
};
