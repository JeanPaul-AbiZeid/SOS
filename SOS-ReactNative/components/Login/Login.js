import { Pressable, Text, TextInput, View } from 'react-native';
import React from "react";
import styles from './styles';

export default function LogIn() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOS</Text>
      <Text style={styles.head}>Sign In</Text>
      <TextInput 
      placeholder='Email' 
      style={styles.input}
      onChangeText={newText => setEmail(newText)}/>
      <TextInput 
      placeholder='Password' 
      style={styles.input}
      onChangeText={newText => setPassword(newText)}/>
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Sign in</Text>
        </Pressable>
      <Text>New Account? Sign up</Text>
    </View>
  );
}
