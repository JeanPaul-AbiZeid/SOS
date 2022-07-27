import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { toggle } from '../../hooks/toggle';
import { useUserInfo } from '../../hooks/UserProvider';


export default function LogIn({navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = toggle();
    const {LoggedIn} = useUserInfo();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>SOS</Text>
      
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput 
        placeholder='Email' 
        style={styles.input}
        onChangeText={setEmail}/>
      </View>
      
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <View style={[styles.input, styles.password]}><TextInput 
        placeholder='Password'
        secureTextEntry={passwordVisibility}
        onChangeText={setPassword}/>
        <Pressable onPress={handlePasswordVisibility}><MaterialCommunityIcons name={rightIcon} size={22} color="#232323" /></Pressable></View>
      </View>
      
      
      <TouchableOpacity style={styles.button}
      onPress={() => {
        LoggedIn(email, password, {navigation})
      }}          
        >
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.signup}>
        <Text>New Account? </Text>
          <TouchableOpacity onPress={() => navigation.push('SignUp')}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
}
