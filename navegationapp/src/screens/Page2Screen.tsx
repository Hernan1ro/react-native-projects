import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';

export const Page2Screen = () => {
  const navigator: any = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>Page 2 Screen</Text>
      <Button
        title="Go to page 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};
