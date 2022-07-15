import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function SignUp({navigation}) {
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>SOS</Text>      

        <TouchableOpacity style={styles.button} onPress={() => navigation.push('SignUpUser')}>
            <Text style={styles.btnText}>Sign Up User</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.push('SignUpExpert')}>
            <Text style={styles.btnText}>Sign Up Expert</Text>
        </TouchableOpacity>
      
    </View>
  );
}