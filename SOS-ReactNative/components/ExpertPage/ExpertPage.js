import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function ExpertPage() {
    
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>John Doe</Text>
            <Text>John Doe info goes here...</Text>
        </View>
        
        <View>
            <Text>Direction</Text>
            <View style={styles.map}></View>
        </View>
        
    </View>
  );
}