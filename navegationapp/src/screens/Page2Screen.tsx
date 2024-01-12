import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export const Page2Screen = () => {
  const navigator: any = useNavigation();

  //------------- IOS configuration -----------------//
  useEffect(() => {
    navigator.setOptions({
      title: 'Hello world',
      headerBackTitle: 'Back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2 Screen</Text>
      <Button
        title="Go to page 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};
