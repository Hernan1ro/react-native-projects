import {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(23);

  const ios = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SOFTIX USERS: {counter}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.fabLocationBL}
          onPress={() => setCounter(counter - 1)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>-1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.2}
          style={styles.fabLocationBR}
          onPress={() => setCounter(counter + 1)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>+1</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const android = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SOFTIX USERS: {counter}</Text>
        <View style={styles.fabLocationBL}>
          <TouchableNativeFeedback
            onPress={() => setCounter(counter - 1)}
            background={TouchableNativeFeedback.Ripple('#2842B', false, 30)}>
            <View style={styles.fab}>
              <Text style={styles.fabText}>-1</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.fabLocationBR}>
          <TouchableNativeFeedback
            onPress={() => setCounter(counter + 1)}
            background={TouchableNativeFeedback.Ripple('#2842B', false, 30)}>
            <View style={styles.fab}>
              <Text style={styles.fabText}>+1</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  };

  return Platform.OS == 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  title: {
    fontSize: 44,
    textAlign: 'center',
    top: -15,
  },

  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },

  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 2,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
