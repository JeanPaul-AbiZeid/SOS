import { Button, Text, TextInput, View } from 'react-native';
import styles from './styles';

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text>SOS</Text>
      <Text>Sign Up</Text>
      <TextInput placeholder='First Name'/>
      <TextInput placeholder='Last Name'/>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='Password'/>
      <Button title="Sign Up" color="red"/>
    </View>
  );
}