import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

export default function SignUp() {
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>SOS</Text>      
    
        <Pressable style={styles.button}>
            <Text style={styles.btnText}>Sign Up User</Text>
        </Pressable>

        <Pressable style={styles.button}>
            <Text style={styles.btnText}>Sign Up Expert</Text>
        </Pressable>
    </View>
  );
}