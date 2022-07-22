import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import styles from './styles';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Tracking() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const mapRef = React.useRef()
  const markerRef = React.useRef()
  const [state, setState] = React.useState({
    curLoc: {
        latitude: 30.7046,
        longitude: 77.1025,
    },
    destinationCords: {},
    isLoading: false,
    coordinate: new AnimatedRegion({
        latitude: 30.7046,
        longitude: 77.1025,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04
    }),
    time: 0,
    distance: 0,
    heading: 0
  })

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  React.useEffect(() => {
    console.log(location)
  })

    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tracking</Text>
        <View style={styles.map}>
          <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}>
              
          </MapView>
        </View>
    </View>
  );
}