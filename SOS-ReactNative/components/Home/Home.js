import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import call from 'react-native-phone-call';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios';
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDistance } from 'geolib';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD4M-WQhjPkCaWfhRSIRmPfsHWReItWxw",
    authDomain: "sosapp-877db.firebaseapp.com",
    projectId: "sosapp-877db",
    storageBucket: "sosapp-877db.appspot.com",
    messagingSenderId: "552222011747",
    appId: "1:552222011747:web:cd7cb766e463a47dd92356",
    measurementId: "G-6SMB0X6W6Y"
  };
  
  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
  const firestore = getFirestore(app, {experimentalForceDetectLongPolling : true});

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
        number: user.preffered_contact, // String value with the number to call
        prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
        skipCanOpen: true // Skip the canOpenURL check
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => {   
                }}>
                    <Image style={styles.image} source={require('../../assets/police-logo.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {
                }}>
                    <Image style={styles.image} source={require('../../assets/ambulance-logo.png')}/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => {
                }}>
                    <Image style={styles.image} source={require('../../assets/fire-logo.png')}/>
                </TouchableOpacity>
                
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