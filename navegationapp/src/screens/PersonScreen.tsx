import {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../router/StackNavigator';

interface RouteParams {
  id: number;
  name: string;
}

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = (props: Props) => {
  const {navigation, route} = props;

  // const params = route.params as RouteParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button title="Go home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
