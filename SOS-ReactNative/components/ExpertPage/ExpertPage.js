import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons'; 
import MapViewDirections from 'react-native-maps-directions';
import { getFirestore, collection, doc, getDocs, getDoc, setDoc } from "firebase/firestore";
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

const updateLocation = async (id, loc) => {
  try{
      await setDoc(doc(firestore, "users", JSON.stringify(id)), {location: loc}, {merge: true});
  } catch (error) {
      console.log(error)
  }
}

export default function ExpertPage() {
  const {user} = useUserInfo();
  const [refreshing, setRefreshing] = React.useState(true);
  const [userFName, setUserFName] = React.useState("")
  const [userLName, setUserLName] = React.useState("")
  const [userBlood, setUserBlood] = React.useState("")
  const [userDob, setUserDob] = React.useState("")
  const [userGender, setUserGender] = React.useState("")
  const [userLat, setUserLat] = React.useState(null)
  const [userLong, setUserLong] = React.useState(null)
  const [isReady, setIsReady] = React.useState(false)
  const [caseId, setCaseId] = React.useState(null)

  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const mapRef = React.useRef()
  const markerRef = React.useRef()
  const GOOGLE_MAP_KEY = "AIzaSyBMZso0L_GfC6he0j_1o0Hqwx7pOtyaWcs"
  const [state, setState] = React.useState({
    curLoc: {
      latitude: 33.9680386,
      longitude: 35.6206043,
    },
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: 33.9680386,
      longitude: 35.6206043,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04
    }),
  })
  const getCase = () => {
    axios({
      method: 'get',
      url: 'http://192.168.1.149:8000/api/getcase/' + `${user.id}`,
      })
      .then(function (response) {
        setCaseId(response.data.case[0].id)
        setUserFName(response.data.case[0].user_info.first_name)
        setUserLName(response.data.case[0].user_info.last_name)
        setUserBlood(response.data.case[0].user_info.blood_type)
        setUserDob(response.data.case[0].user_info.dob)
        setUserGender(response.data.case[0].user_info.gender)
        setUserLat(response.data.case[0].user_lat)
        setUserLong(response.data.case[0].user_long)
        setIsReady(true)

      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { curLoc, isLoading, coordinate } = state
  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const destinationCords = {
    latitude: userLat,
    longitude: userLong
  }

  React.useEffect(() => {
    getLiveLocation();
    getCase()
  }, []);

  const getLiveLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
    let latitude = loc.coords.latitude;
    let longitude = loc.coords.longitude;
    animate(latitude, longitude);
    updateState({
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
        updateLocation(user.id, location)
    }, 6000);
    return () => clearInterval(interval)
  }, [])

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
            {isReady? 
            <MapView
                ref={mapRef}
                style={StyleSheet.absoluteFill}
                initialRegion={{
                  ...curLoc,
                  latitudeDelta: 0.09,
                  longitudeDelta: 0.04,
              }}>

              <Marker.Animated ref={markerRef} coordinate={coordinate} ><FontAwesome5 name="car-side" size={24} color="red" /></Marker.Animated>

              {Object.keys(destinationCords).length > 0 && (<Marker
                coordinate={destinationCords}
              />)}

              {Object.keys(destinationCords).length > 0 && (<MapViewDirections
                origin={curLoc}
                destination={destinationCords}
                apikey={GOOGLE_MAP_KEY}
                strokeWidth={6}
                strokeColor="blue"
                optimizeWaypoints={true}
              />)}
                
            </MapView>:null}
          </View>

          <TouchableOpacity style={styles.button} onPress={() => {
            let data = {
              "id" : caseId
            }
            axios({
              method: 'post',
              url: 'http://192.168.1.149:8000/api/updatecase',
              })
              .then(function (response) {
                console.log(response)
              })
              .catch((error) => {
                console.error(error);
              });
          }}>
              <Text style={styles.btnText}>Done</Text>
          </TouchableOpacity>
        </View>
        :
        <SafeAreaView>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={getCase}
              />
            }
          >
            <Text>No Notications Yet</Text>
          </ScrollView>
        </SafeAreaView>}
    </View>
  );
}