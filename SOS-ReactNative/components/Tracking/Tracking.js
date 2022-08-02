import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from './styles';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons'; 
import MapViewDirections from 'react-native-maps-directions';
import {API_KEY} from '@env'
import { useUserInfo } from '../../hooks/UserProvider';

export default function Tracking() {
  const {isCase, caseLat, caseLong, expertId} = useUserInfo()
  const mapRef = React.useRef()
  const markerRef = React.useRef()

  

  const expertCoordinates = {
    latitude: 34.013184,
    longitude:35.6417536
  }

  const userCoordinates = {
    latitude: caseLat,
    longitude: caseLong,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04
  }

    
  return (
    <View style={styles.container}>
      {isCase?
        <View style={styles.map}>
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            initialRegion={userCoordinates}
          >

            <Marker.Animated ref={markerRef} coordinate={userCoordinates} />

            {Object.keys(expertCoordinates).length > 0 && (<Marker
              coordinate={expertCoordinates}
            ><FontAwesome5 name="car-side" size={24} color="red" /></Marker>)}

            {Object.keys(expertCoordinates).length > 0 && (<MapViewDirections
              origin={userCoordinates}
              destination={expertCoordinates}
              apikey={API_KEY}
              strokeWidth={6}
              strokeColor="blue"
              optimizeWaypoints={true}
            />)}
              
          </MapView>
        </View>
        :
        <Text style={styles.text}>No Tracking to show at the moment</Text>}
    </View>
  );
}