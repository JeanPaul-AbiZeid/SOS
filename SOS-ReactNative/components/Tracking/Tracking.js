import React from 'react';
import {  Text, View } from 'react-native';
import styles from './styles';

export default function Tracking() {
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tracking</Text>
        <View style={styles.map}></View>
    </View>
  );
}