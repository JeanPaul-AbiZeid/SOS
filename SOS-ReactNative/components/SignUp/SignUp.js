import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';

export default function SignUp() {
    
  return (
    <View style={styles.main}>
        <Text style={styles.title}>SOS</Text>
        <Text style={styles.head}>Sign Up</Text>
      
    
        <Pressable style={styles.button}>
            <Text style={styles.btnText}>Sign Up as a User</Text>
        </Pressable>

        <Pressable style={styles.button}>
            <Text style={styles.btnText}>Sign Up as an Expert</Text>
        </Pressable>
    </View>
  );
}