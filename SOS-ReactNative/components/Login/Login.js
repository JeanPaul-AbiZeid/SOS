import { Button, Text, TextInput, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from './styles';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Text>SOS</Text>
      <Text>Sign In</Text>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='Password'/>
      <Checkbox /><Text>Show Password</Text>
      <Button title="Log In" color="red"/>
      <Text>New Account? Sign up</Text>
    </View>
  );
}
