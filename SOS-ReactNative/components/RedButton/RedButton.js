import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";
import styles from './styles';



export default function RedButton( {text, onPress}) {

  return (
      
      <TouchableOpacity style={styles.button}
      onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
      
  );
}
