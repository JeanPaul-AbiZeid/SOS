import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles';


export default function Home() {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>SOS</Text>
        </ScrollView>
    )
    
}