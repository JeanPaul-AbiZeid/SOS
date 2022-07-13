import {  ScrollView, Text, View } from 'react-native';
import React from "react";
import styles from './styles';
import { EvilIcons } from '@expo/vector-icons'; 

export default function Notification() {

  return (
    <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Notification</Text>
            <EvilIcons name="search" size={24} color="red" />
        </View>
        </ScrollView>
    </View>
    
    
  );
}
