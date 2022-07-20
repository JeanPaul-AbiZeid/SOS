import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { toggle } from '../../hooks/toggle';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key , value)
  } catch (e) {
    console.log(e)
  }
}

export default function LogIn({navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = toggle();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>SOS</Text>
      <Text style={styles.head}>Sign In</Text>
      
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
      onPress={
        () => { 
          let data = {
            "email": email,
            "password": password,
          }
          // navigation.push('HomePage')

          axios({
            method: 'post',
            url: 'http://192.168.1.149:8000/api/login', 
            data: data,
            })
            .then(function (response) {
              storeData('token', response.data.authorisation.token)
              storeData('id', JSON.stringify(response.data.user.id))
            
            })
            .catch(function (error){
              console.log(error)
              alert("Incorrect email or password");
          })
          
        }}>
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
