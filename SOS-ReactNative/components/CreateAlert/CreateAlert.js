import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

        <View style={styles.choose}>
            <Text>Upload image:</Text>
            <TouchableOpacity style={styles.upload}>
                <Text>Choose image</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Send Alert</Text>
        </TouchableOpacity>
        
        
    </ScrollView>
  );
}
