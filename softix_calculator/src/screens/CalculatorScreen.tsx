import {View, Text} from 'react-native';
import {useState, useRef} from 'react';
import {styles} from '../theme/appTheme';
import {Btn} from '../components/Btn';

enum Opeators {
  add,
  substract,
  multiply,
  divide,
}

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [prevNum, setPrevNum] = useState('0');

  const lastOperation = useRef<Opeators>();

  const clear = () => {
    setNumber('0');
    setPrevNum('0');
  };

  const buildNumber = (textNum: string) => {
    // validations

    if (number.includes('.') && textNum == '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // decimal dot
      if (textNum === '.') {
        setNumber(number + textNum);

        // theres another zero and a dot
      } else if (textNum === '0' && number.includes('.')) {
        setNumber(number + textNum);

        // test if different to zero and does not have dot
      } else if (textNum !== '0' && !number.includes('.')) {
        setNumber(textNum);

        // Avoid irregular decimals
      } else if (textNum === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNum);
      }
    } else {
      setNumber(number + textNum);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let tempNumber = number;

    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substr(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberByPrev = () => {
    if (number.endsWith('.')) {
      setPrevNum(number.slice(0, -1));
    } else {
      setPrevNum(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberByPrev();
    lastOperation.current = Opeators.divide;
  };
  const btnMultiply = () => {
    changeNumberByPrev();
    lastOperation.current = Opeators.multiply;
  };
  const btnSubstract = () => {
    changeNumberByPrev();
    lastOperation.current = Opeators.substract;
  };
  const btnAdd = () => {
    changeNumberByPrev();
    lastOperation.current = Opeators.add;
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
        <Btn text="+/-" color="#9b9b9b" action={positiveNegative} />
        <Btn text="del" color="#9b9b9b" action={btnDelete} />
        <Btn text="/" color="#ff9427" action={btnDivide} />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="7" action={buildNumber} />
        <Btn text="8" action={buildNumber} />
        <Btn text="9" action={buildNumber} />
        <Btn text="X" color="#ff9427" action={btnMultiply} />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="4" action={buildNumber} />
        <Btn text="5" action={buildNumber} />
        <Btn text="6" action={buildNumber} />
        <Btn text="-" color="#ff9427" action={btnSubstract} />
      </View>
      {/*---------- button row ----------*/}
      <View style={styles.row}>
        <Btn text="1" action={buildNumber} />
        <Btn text="2" action={buildNumber} />
        <Btn text="3" action={buildNumber} />
        <Btn text="+" color="#ff9427" action={btnAdd} />
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
