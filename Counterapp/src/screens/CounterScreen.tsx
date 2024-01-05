import {useState} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(23);

  return (
    <View
      style={{
        backgroundColor: 'cyan',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 44,
          textAlign: 'center',
          top: -15,
        }}>
        SOFTIX USERS: {counter}
      </Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <View>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
