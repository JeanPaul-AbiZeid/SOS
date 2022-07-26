import React from 'react';
import { ScrollView, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import call from 'react-native-phone-call';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios';


export default function Home({navigation}) {
    const [preferredContact, setPreferredContact] = React.useState("")
    const {user} = useUserInfo();

    const getInfo = () => {
        let data = {
            "id" : user.id
        }
        axios({
            method: 'post',
            url: 'http://192.168.1.149:8000/api/userinfo',
            data: data
            })
            .then(function (response) {
                setPreferredContact(response.data.user.preffered_contact)
            })
            .catch(function (error){
                console.log(error)
                alert(error)
        }) 
    }

    React.useEffect(() => {
        getInfo()
    }, []);


    const args = {
        number: preferredContact, // String value with the number to call
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