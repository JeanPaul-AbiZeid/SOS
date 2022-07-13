import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import React from "react";
import styles from './styles';

export default function CreateAlert() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TextInput 
        placeholder='Case Title' 
        style={styles.input}/>

        <TextInput 
        placeholder='Description' 
        multiline = {true}
        style={[styles.input, styles.description]}/>
        
    </ScrollView>
  );
}
