import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import RedButton from '../RedButton/RedButton';

export default function SignUp({navigation}) {
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>SOS</Text> 
        
        <RedButton styling={styles.button} text="Sign up User" onPress={() => navigation.push('SignUpUser')}/>
        <RedButton styling={styles.button} text="Sign up Expert" onPress={() => navigation.push('SignUpExpert')}/>     
      
    </View>
  );
}