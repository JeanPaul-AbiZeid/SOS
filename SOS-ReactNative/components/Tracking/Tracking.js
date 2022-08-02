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
  const {isCase, caseLat, caseLong} = useUserInfo()
  // const [location, setLocation] = React.useState(null);
  // const [errorMsg, setErrorMsg] = React.useState(null);
  const mapRef = React.useRef()
  const markerRef = React.useRef()
  // const [state, setState] = React.useState({
  //   curLoc: {
  //     latitude: 33.9680386,
  //     longitude: 35.6206043,
  //   },
  //   isLoading: false,
  //   coordinate: new AnimatedRegion({
  //     latitude: 33.9680386,
  //     longitude: 35.6206043,
  //     latitudeDelta: 0.09,
  //     longitudeDelta: 0.04
  //   }),
  // })
  // const { curLoc, isLoading, coordinate } = state
  // const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const destinationCords = {
    latitude: 34.013184,
    longitude:35.6417536
  }

  // React.useEffect(() => {
  //   getLiveLocation();
  // }, []);

  // const getLiveLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     setErrorMsg('Permission to access location was denied');
  //     return;
  //   }

  //   let loc = await Location.getCurrentPositionAsync({});
  //   setLocation(loc);
  //   let latitude = loc.coords.latitude;
  //   let longitude = loc.coords.longitude;
  //   animate(latitude, longitude);
  //   updateState({
  //     curLoc: { latitude, longitude },
  //     coordinate: new AnimatedRegion({
  //       latitude: latitude,
  //       longitude: longitude,
  //       latitudeDelta: 0.09,
  //       longitudeDelta: 0.04
  //     })
  //   })
  // };

  // const animate = (latitude, longitude) => {
  //   const newCoordinate = { latitude, longitude };
  //   if (Platform.OS == 'android') {
  //       if (markerRef.current) {
  //           markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
  //       }
  //   } else {
  //       coordinate.timing(newCoordinate).start();
  //   }
  // }

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  const pos = {
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
            initialRegion={pos}
          >

            <Marker.Animated ref={markerRef} coordinate={pos} />

            {Object.keys(destinationCords).length > 0 && (<Marker
              coordinate={destinationCords}
            ><FontAwesome5 name="car-side" size={24} color="red" /></Marker>)}

            {Object.keys(destinationCords).length > 0 && (<MapViewDirections
              origin={pos}
              destination={destinationCords}
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