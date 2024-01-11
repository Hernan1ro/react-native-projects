import {useState, useRef} from 'react';

enum Opeators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
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

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNum);

    switch (lastOperation.current) {
      case Opeators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Opeators.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Opeators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Opeators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
  };

  return {
    number,
    prevNum,
    clear,
    buildNumber,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculate,
  };
};
