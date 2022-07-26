import React from 'react';
import { ScrollView, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import call from 'react-native-phone-call'


export default function Home({navigation}) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>SOS</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/police-logo.png')}/>
                <Image style={styles.image} source={require('../../assets/ambulance-logo.png')}/>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/fire-logo.png')}/>
                <Image style={styles.image} source={require('../../assets/contact-logo.png')}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('CreateAlert')}>
                <Text style={styles.btnText}>Alert</Text>
            </TouchableOpacity>
        </ScrollView>
    )
    
}