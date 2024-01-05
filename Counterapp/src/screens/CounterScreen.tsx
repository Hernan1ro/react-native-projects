import {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(23);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOFTIX USERS: {counter}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCounter(counter + 1)}>
        <View>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },

  title: {
    fontSize: 44,
    textAlign: 'center',
    top: -15,
  },

  btn: {
    padding: 1,
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 12,
    borderRadius: 10,
  },
});
