import { Text, TextInput, View } from 'react-native';
import styles from './styles';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Text>SOS</Text>
      <Text>Sign In</Text>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='Password'/>
    </View>
  );
}
