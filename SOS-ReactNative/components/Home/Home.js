import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View, Image } from 'react-native';
import styles from './styles';


export default function Home() {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>SOS</Text>
            <Image source={require('../../assets/police-logo.png')}/>
            <Image source={require('../../assets/ambulance-logo.png')}/>
            <Image source={require('../../assets/fire-logo.png')}/>
            <Image source={require('../../assets/contact-logo.png')}/>
            <Pressable style={styles.button}>
                <Text style={styles.btnText}>Alert</Text>
            </Pressable>
        </ScrollView>
    )
    
}