import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { toggle } from '../../hooks/toggle';

export default function LogIn({navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = toggle();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>SOS</Text>
      <Text style={styles.head}>Sign In</Text>
      
      <View>
        <Text>Email</Text>
        <TextInput 
        placeholder='Email' 
        style={styles.input}
        onChangeText={newText => setEmail(newText)}/>
      </View>
      
      <View>
        <Text>Password</Text>
        <View style={[styles.input, styles.password]}><TextInput 
        placeholder='Password'
        secureTextEntry={passwordVisibility}
        onChangeText={newText => setPassword(newText)}/>
        <Pressable onPress={handlePasswordVisibility}><MaterialCommunityIcons name={rightIcon} size={22} color="#232323" /></Pressable></View>
      </View>
      
      
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Sign in</Text>
      </Pressable>
      <View style={styles.signup}>
        <Text>New Account? </Text>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
}
