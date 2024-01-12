import {StackScreenProps} from '@react-navigation/stack';
import {Text, View, Button} from 'react-native';
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
    </View>
  );
};
