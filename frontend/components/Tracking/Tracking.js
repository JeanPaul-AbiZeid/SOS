import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from './styles';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons'; 
import MapViewDirections from 'react-native-maps-directions';
import {API_KEY} from '@env'
import { useUserInfo } from '../../hooks/UserProvider';
import { doc, onSnapshot } from "firebase/firestore";
import {firestore} from '../firebase';
import { getDistance } from 'geolib';


export default function Tracking() {
  const {isCase, caseLat, caseLong, expertId, expertLoc, setExpertLoc} = useUserInfo()
  const [distance, setDistance] = React.useState(0)
  const mapRef = React.useRef()
  const markerRef = React.useRef()


  //updating expert location
  const unsub = onSnapshot(doc(firestore, "users", JSON.stringify(expertId)), (doc) => {
    if(isCase){
      let newExpertLoc = {
      latitude: doc.data().location.coords.latitude,
      longitude: doc.data().location.coords.longitude
    }
    setExpertLoc(newExpertLoc)
    let new_distance = getDistance(
      {latitude : caseLat, longitude: caseLong},
      {latitude : newExpertLoc.latitude, longitude: newExpertLoc.longitude}
    )
    setDistance(new_distance)
    }
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
      {isCase && distance > 15?
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