import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons'; 

export default function ExpertPage() {
    
  return (
    <View style={styles.container}>
        <View style={styles.info}>
            <Text style={styles.title}>John Doe</Text>
            <View style={styles.loc}>
                <Entypo name="location-pin" size={24} color="red" />
                <Text>Jounieh</Text>
            </View>
            
            <Text>John Doe info goes here...</Text>
        </View>
        
        <Text style={styles.direction}>Direction</Text>
        <View style={styles.map}></View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
    </View>
  );
}