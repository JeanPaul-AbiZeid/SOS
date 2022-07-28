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
    const [expertId, setExpertId] = React.useState([])
    const [expertLocation, setExpertLocation] = React.useState([])
    const [userLocation, setUserLocation] = React.useState([])


    const getLocations = async (expertId) => {
        const obj = {expertLocations : []}
        const userLoc = await getDoc(doc(firestore, "users", JSON.stringify(user.id)))
        let user_coord = {
            lat: userLoc.data().location.coords.latitude,
            long: userLoc.data().location.coords.longitude
        }
        obj.userLocation = user_coord
        // setUserLocation(prevArray => [...prevArray, user_coord])

        // console.log(userLocation)

        const expertLocationsTemp = await Promise.all(expertId.map((expert) => getDoc(doc(firestore, "users", JSON.stringify(expert.id)))))

        obj.expertLocations = expertLocationsTemp.map((location, index) => {
            let coord = {
                id: expertId[index].id,
                lat: location.data().location.coords.latitude,
                long: location.data().location.coords.longitude,
            }
            return(coord)
        })
        
        // expertId.forEach(async (expert) => {
        
        // const location = await getDoc(doc(firestore, "users", JSON.stringify(expert.id)))
        // let coord = {
        //     id: expert.id,
        //     lat: location.data().location.coords.latitude,
        //     long: location.data().location.coords.longitude,
        // }
        // obj.expertLocations.push(coord)
        // obj.expertLocations
        // setExpertLocation(prevArray => [...prevArray, coord])
        // })
        return(obj) 
        

        
    }
    

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
    const getExperts = (role_id) => 
        axios({
            method: 'get',
            url: 'http://192.168.1.149:8000/api/getexperts/' +`${role_id}`,
            })
            .then(function (response) {
                // setExpertId(response.data.experts)
                return (response.data.experts)
            })
            .catch(function (error){
                console.log(error)
                alert(error)
        }) 
    

    const getNearest = (userLocation, expertLocation) => {
        let nearest_expert_id = expertLocation[0].id
        let minimum_distance = getDistance(
            {latitude : userLocation.lat, longitude: userLocation.long},
            {latitude : expertLocation[0].lat, longitude: expertLocation[0].long}
        )
        expertLocation.forEach((expert) => {
            let distance = getDistance(
                {latitude : userLocation.lat, longitude: userLocation.long},
                {latitude : expert.lat, longitude: expert.long}
            )
            if (distance < minimum_distance) {
                minimum_distance = distance
                nearest_expert_id = expert.id
            }
        })
        return(nearest_expert_id)
    }

    React.useEffect(() => {
        getInfo()
    }, []);


    const args = {
        number: user.preffered_contact, // String value with the number to call
        prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
        skipCanOpen: true // Skip the canOpenURL check
    }

    const result = async (role_id) => {
        const expertId = await getExperts(role_id);
        const locations = await getLocations(expertId);
        const nearest_expert_id = getNearest(locations.userLocation, locations.expertLocations);
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