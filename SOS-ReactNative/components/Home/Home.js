import React from 'react';
import { ScrollView, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import call from 'react-native-phone-call'


export default function Home({navigation}) {
    const args = {
        number: '71977857', // String value with the number to call
        prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
        skipCanOpen: true // Skip the canOpenURL check
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>SOS</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/police-logo.png')}/>
                <Image style={styles.image} source={require('../../assets/ambulance-logo.png')}/>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/fire-logo.png')}/>
                <TouchableOpacity onPress={() => {
                    call(args).catch(console.error)
                }}>
                    <Image style={styles.image} source={require('../../assets/contact-logo.png')}/>
                </TouchableOpacity>
                
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('CreateAlert')}>
                <Text style={styles.btnText}>Alert</Text>
            </TouchableOpacity>
        </ScrollView>
    )
    
}