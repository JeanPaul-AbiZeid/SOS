import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons'; 
import MapViewDirections from 'react-native-maps-directions';
import { getFirestore, collection, doc, getDocs, getDoc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import RedButton from '../RedButton/RedButton';
import {API_KEY} from '@env'

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

const updateLocation = async (id, loc) => {
  try{
      await setDoc(doc(firestore, "users", JSON.stringify(id)), {location: loc}, {merge: true});
  } catch (error) {
      console.log(error)
  }
}

export default function ExpertPage() {
  const {user, axiosUrl, location} = useUserInfo();
  const [refreshing, setRefreshing] = React.useState(false);
  const [userFName, setUserFName] = React.useState("")
  const [userLName, setUserLName] = React.useState("")
  const [userBlood, setUserBlood] = React.useState("")
  const [userDob, setUserDob] = React.useState("")
  const [userGender, setUserGender] = React.useState("")
  const [caseId, setCaseId] = React.useState(null)
  const [userLat, setUserLat] = React.useState(null)
  const [userLong, setUserLong] = React.useState(null)
  const [isReady, setIsReady] = React.useState(false)

  const mapRef = React.useRef()
  const markerRef = React.useRef()

  const getCase = () => {
    axios({
      method: 'get',
      url: axiosUrl +'getcase/' + `${user.id}`,
    })
    .then(function (response) {
      if(response.data.case.length > 0){
        setCaseId(response.data.case[0].id)
        setUserFName(response.data.case[0].user_info.first_name)
        setUserLName(response.data.case[0].user_info.last_name)
        setUserBlood(response.data.case[0].user_info.blood_type)
        setUserDob(response.data.case[0].user_info.dob)
        setUserGender(response.data.case[0].user_info.gender)
        setUserLat(response.data.case[0].user_lat)
        setUserLong(response.data.case[0].user_long)
        setIsReady(true)
        setRefreshing(false);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const updateCase = () => {
    axios({
      method: 'post',
      url: axiosUrl +'updatecase',
      data: {"id" : caseId}
    })
    .then(function (response) {
      console.log(response)
      setIsReady(false)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  //expert coordinates
  const ExpertCoords = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }

  React.useEffect(() => {
    getCase()
  }, []);

  const userPosition = {
    latitude: userLat,
    longitude: userLong,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  }

  return (
    <View style={styles.container}>
      {isReady?
      <View>
        <View style={styles.info}>
            <Text style={styles.title}>{userFName} {userLName}</Text>            
            <Text>Gender: {userGender}</Text>
            <Text>Date of Birth: {userDob}</Text>
            <Text>Blood Type: {userBlood}</Text>
        </View>
        
        <Text style={styles.direction}>Direction</Text>
        <View style={styles.map}>
          {userLat && userLong &&
          
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            initialRegion={userPosition}
          >

            <Marker.Animated ref={markerRef} coordinate={userPosition} />

            {Object.keys(ExpertCoords).length > 0 && (<Marker
              coordinate={ExpertCoords}
            ><FontAwesome5 name="car-side" size={24} color="red" /></Marker>)}

            {Object.keys(ExpertCoords).length > 0 && (<MapViewDirections
              origin={userPosition}
              destination={ExpertCoords}
              apikey={API_KEY}
              strokeWidth={6}
              strokeColor="blue"
              optimizeWaypoints={true}
            />)}
              
          </MapView>}
        </View>

        <RedButton 
          styling={styles.button}
          text="Done"
          onPress={() => {updateCase()}}
        />
      </View> 
      :
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={getCase}
            />
          }
        >
          <Text style={styles.text}>There is no task at the moment</Text>
        </ScrollView>
      </SafeAreaView>}
  
    </View>
  );
}