import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import call from 'react-native-phone-call';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios';
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDistance } from 'geolib';
import * as Notifications from 'expo-notifications';
import RedButton from '../RedButton/RedButton';

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

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

export default function Home({navigation}) {
    const {user, axiosUrl, setisCase} = useUserInfo();
    const [notification, setNotification] = React.useState(false);
    const notificationListener = React.useRef();
    const responseListener = React.useRef();

    React.useEffect(() => {

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    //sending notification to expert
    async function sendPushNotification(expoPushToken) {
    const message = {
        to: expoPushToken,
        sound: 'default',
        title: "New Case",
        body: "You have an urgent case",
        data: { someData: 'goes here' },
    };
    
    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
    }
    
    //getting the expert push token
    const getToken = async(expertID) => {
        const token = await getDoc(doc(firestore, "users", JSON.stringify(expertID)))
        return (token.data().token)
    }

    //getting the expert's location
    const getLocations = async (expertId) => {
        const obj = {expertLocations : []}
        const userLoc = await getDoc(doc(firestore, "users", JSON.stringify(user.id)))
        let user_coord = {
            lat: userLoc.data().location.coords.latitude,
            long: userLoc.data().location.coords.longitude
        }
        obj.userLocation = user_coord

        const expertLocationsTemp = await Promise.all(expertId.map((expert) => getDoc(doc(firestore, "users", JSON.stringify(expert.id)))))

        obj.expertLocations = expertLocationsTemp.map((location, index) => {
            let coord = {
                id: expertId[index].id,
                lat: location.data().location.coords.latitude,
                long: location.data().location.coords.longitude,
            }
            return(coord)
        })
        return(obj)  
    }

    //getting all the available experts' ids
    const getExperts = (role_id) => 
        axios({
            method: 'get',
            url: axiosUrl + 'getexperts/' +`${role_id}`,
            })
            .then(function (response) {
                return (response.data.experts)
            })
            .catch(function (error){
                console.log(error)
                alert(error)
        }) 
    

    //finging the nearest expert
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

    const args = {
        number: user.preffered_contact, // String value with the number to call
        prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
        skipCanOpen: true // Skip the canOpenURL check
    }

    const update = (data) => {
        axios({
            method: 'post',
            url: axiosUrl + 'editprofile', 
            data: data,
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error){
                console.log(error)
                alert(error)
        })
    }

    //creating new case
    const createCase = (user_id, expert_id, user_lat, user_long, token) => {
        let data = {
            "user_id" : user_id,
            "expert_id" : expert_id,
            "user_lat" : user_lat,
            "user_long" : user_long
          }
          axios({
            method: 'post',
            url: axiosUrl + 'createcase', 
            data: data,
            })
            .then(function (response) {
                console.log(response)
                sendPushNotification(token)
                update({"id": expert_id, "is_available": 1})
                setisCase(true)
                alert("Request Sent")
            })
            .catch(function (error){
              console.log(error)
          })
    }

    const result = async (role_id) => {
        const expertId = await getExperts(role_id);
        console.log(expertId)
        if(expertId.length > 0) {
            const locations = await getLocations(expertId);
            // console.log(locations)
            const nearest_expert_id = getNearest(locations.userLocation, locations.expertLocations);
            // console.log(nearest_expert_id)
            const token = await getToken(nearest_expert_id)
            // console.log(token)
            createCase(user.id, nearest_expert_id, locations.userLocation.lat, locations.userLocation.long, token)
        }else{
            alert("No expert is available")
        }   
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => {
                    result(2)
                }}>
                    <Image style={styles.image} source={require('../../assets/police-logo.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {
                    result(4)
                }}>
                    <Image style={styles.image} source={require('../../assets/ambulance-logo.png')}/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => {
                    result(3)
                }}>
                    <Image style={styles.image} source={require('../../assets/fire-logo.png')}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {
                    call(args).catch(console.error)
                }}>
                    <Image style={styles.image} source={require('../../assets/contact-logo.png')}/>
                </TouchableOpacity>
                
            </View>

            <RedButton 
                styling={styles.button}
                onPress={() => navigation.push('CreateAlert')}
                text="Alert"
            />
        </ScrollView>
    )
    
}