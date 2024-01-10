import {View, Text} from 'react-native';
import {useState} from 'react';
import {styles} from '../theme/appTheme';
import {Btn} from '../components/Btn';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [prevNum, setPrevNum] = useState('100');

  const clear = () => {
    setNumber('0');
  };

  const buildNumber = (textNum: string) => {
    console.log(textNum);
    setNumber(number + textNum);
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{prevNum == '0' ? '' : prevNum}</Text>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.text}>
        {number}
      </Text>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="C" color="#9b9b9b" action={clear} />
        <Btn text="+/-" color="#9b9b9b" action={clear} />
        <Btn text="del" color="#9b9b9b" action={clear} />
        <Btn text="/" color="#ff9427" action={clear} />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="7" action={buildNumber} />
        <Btn text="8" action={buildNumber} />
        <Btn text="9" action={buildNumber} />
        <Btn text="X" color="#ff9427" action={clear} />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="4" action={buildNumber} />
        <Btn text="5" action={buildNumber} />
        <Btn text="6" action={buildNumber} />
        <Btn text="-" color="#ff9427" action={clear} />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="1" action={buildNumber} />
        <Btn text="2" action={buildNumber} />
        <Btn text="3" action={buildNumber} />
        <Btn text="+" color="#ff9427" action={clear} />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="0" width action={buildNumber} />
        <Btn text="." action={buildNumber} />
        <Btn text="=" color="#ff9427" action={clear} />
      </View>
    </View>
  );
};
