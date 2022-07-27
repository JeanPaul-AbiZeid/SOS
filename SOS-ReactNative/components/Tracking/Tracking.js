import React from 'react';
import {  Text, View, StyleSheet, Image } from 'react-native';
import styles from './styles';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons'; 
import MapViewDirections from 'react-native-maps-directions';

export default function Tracking() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const mapRef = React.useRef()
  const markerRef = React.useRef()
  const [state, setState] = React.useState({
    curLoc: {
      latitude: 33.9680386,
      longitude: 35.6206043,
    },
    // destinationCords: {},
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: 33.9680386,
      longitude: 35.6206043,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04
    }),
    time: 0,
    distance: 0,
    heading: 0
  })
  const { curLoc, time, distance, /*destinationCords,*/ isLoading, coordinate,heading } = state
  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const destinationCords = {
    latitude:33.013184,
    longitude:35.6417536
  }

  React.useEffect(() => {
    getLiveLocation();
  }, []);

  const getLiveLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    animate(latitude, longitude);
    updateState({
      heading: heading,
      curLoc: { latitude, longitude },
      coordinate: new AnimatedRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
      })
    })
  };

  const animate = (latitude, longitude) => {
    const newCoordinate = { latitude, longitude };
    if (Platform.OS == 'android') {
        if (markerRef.current) {
            markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
        }
    } else {
        coordinate.timing(newCoordinate).start();
    }
  }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
        getLiveLocation()
    }, 6000);
    return () => clearInterval(interval)
  }, [])

    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tracking</Text>
        <View style={styles.map}>
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            initialRegion={{
              ...curLoc,
              latitudeDelta: 0.09,
              longitudeDelta: 0.04,
          }}>

            <Marker.Animated ref={markerRef} coordinate={coordinate} />

            {Object.keys(destinationCords).length > 0 && (<Marker
              coordinate={destinationCords}
            ><FontAwesome5 name="car-side" size={24} color="red" /></Marker>)}

            {/* {Object.keys(destinationCords).length > 0 && (<MapViewDirections
              origin={curLoc}
              destination={destinationCords}
              // apikey={GOOGLE_MAP_KEY}
              strokeWidth={6}
              strokeColor="red"
              optimizeWaypoints={true}
            />)} */}
              
          </MapView>
        </View>
    </View>
  );
}