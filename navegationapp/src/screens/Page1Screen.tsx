import {StackScreenProps} from '@react-navigation/stack';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

// Enable typescript properties
interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = (props: Props) => {
  const {navigation} = props;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1 Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text>Nav to arguments</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.btnBig, backgroundColor: '#5856d6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Johan',
            })
          }>
          <Text style={styles.btnText}>Johan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnBig}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Tenma',
            })
          }>
          <Text style={styles.btnText}>Tenma</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
