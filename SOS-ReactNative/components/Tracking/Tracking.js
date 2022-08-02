import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from './styles';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons'; 
import MapViewDirections from 'react-native-maps-directions';
import {API_KEY} from '@env'
import { useUserInfo } from '../../hooks/UserProvider';
import { doc, getFirestore, collection, query, where, onSnapshot, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

export default function Tracking() {
  const {isCase, caseLat, caseLong, expertId, expertLoc} = useUserInfo()
  const [expertCoord, setExpertCoord] = React.useState({})
  const mapRef = React.useRef()
  const markerRef = React.useRef()

  const q = query(collection(firestore, "users"), where("id", "==", expertId));
  const getLocationExpert = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {

    });
  });

  const userCoordinates = {
    latitude: caseLat,
    longitude: caseLong,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  }

  React.useEffect(() => {
    console.log(userCoordinates)
    console.log(expertLoc)
  }, []);

  return (
    <View style={styles.container}>
      {isCase?
        <View style={styles.map}>
          {userCoordinates && expertLoc &&
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            initialRegion={userCoordinates}
          >

            <Marker.Animated ref={markerRef} coordinate={userCoordinates} />

            {Object.keys(expertLoc).length > 0 && (<Marker
              coordinate={expertLoc}
            ><FontAwesome5 name="car-side" size={24} color="red" /></Marker>)}

            {Object.keys(expertLoc).length > 0 && (<MapViewDirections
              origin={userCoordinates}
              destination={expertLoc}
              apikey={API_KEY}
              strokeWidth={6}
              strokeColor="blue"
              optimizeWaypoints={true}
            />)}
              
          </MapView>}
        </View>
        :
        <Text style={styles.text}>No Tracking to show at the moment</Text>}
    </View>
  );
}