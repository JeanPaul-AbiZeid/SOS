import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { initializeFirestore, collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import * as Notifications from 'expo-notifications';
import * as Location from 'expo-location';

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
  
//   Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const firestore = initializeFirestore(app, {experimentalForceDetectLongPolling : true});

const updateToken = async (id, pushtoken) => {
    try{
        await setDoc(doc(firestore, "users", JSON.stringify(id)), {token: pushtoken}, {merge: true});
    } catch (error) {
        console.log(error)
    }
}

const deleteToken = async (id) => {
    try{
        await deleteDoc(doc(firestore, "users", JSON.stringify(id)));
    } catch (error) {
        console.log(error)
    }
}

const updateLocation = async (id, userLocation) => {
    try{
        await setDoc(doc(firestore, "users", JSON.stringify(id)), {location: userLocation}, {merge: true});
    } catch (error) {
        console.log(error)
    }
}

async function registerForPushNotificationsAsync() {
    let token;
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
   
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }

const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key , value)
    } catch (e) {
      console.log(e)
    }
}

const Clear = async () => {
    await AsyncStorage.clear();
}

const update = (data) => {
    axios({
        method: 'post',
        url: 'http://192.168.1.149:8000/api/editprofile', 
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

export const userContext = React.createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = React.useState({})
    const [token, setToken] = React.useState("")
    const [isLoggedin, setIsLoggedin] = React.useState(false)
    const [isUser, setIsUser] = React.useState(false)
    const [expoPushToken, setExpoPushToken] = React.useState('');
    const [location, setLocation] = React.useState(null);

    React.useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
        getLiveLocation()
    }, []);

    const LoggedIn = (email, password, {navigation}) => {
        let data = {
            "email": email,
            "password": password,
          }

          axios({
            method: 'post',
            url: 'http://192.168.1.149:8000/api/login', 
            data: data,
            })
            .then(function (response) {
                storeData('token', response.data.authorisation.token)
                setUser(response.data.user)
                setToken(response.data.authorisation.token)
                updateLocation(response.data.user.id, location)
                updateToken(response.data.user.id, expoPushToken)
                setIsUser(true)
                if (response.data.user.role_id != 1) {
                    update({"id": response.data.user.id, "is_available": 2})
                }
            
            })
            .catch(function (error){
                console.log(error)
                alert("Incorrect email or password");
          })
    }

    const SignUpExpert = (first_name, last_name, email, password, role, {navigation}) => {
        let data = {
            "first_name" : first_name,
            "last_name" : last_name,
            "email" : email,
            "password" : password,
            "role_id" : role,
            "is_available" : 1,
        }
        axios({
            method: 'post',
            url: 'http://192.168.1.149:8000/api/register', 
            data: data,
            })
            .then(function (response) {
                alert(response.data.message)
                navigation.push('LogIn')
            
            })
            .catch(function (error){
                console.log(error)
                alert(error)
        })
    }

    const SignUpUser = (first_name, last_name, email, password, phone, blood_type, date, gender, {navigation}) => {
        let data = {
            "first_name" : first_name,
            "last_name" : last_name,
            "email" : email,
            "password" : password,
            "number" : phone,
            "blood_type" : blood_type,
            "dob" : date.toLocaleDateString(),
            "gender" : gender,
            "role_id" : 1,
            "is_available" : 1,
        }

        axios({
          method: 'post',
          url: 'http://192.168.1.149:8000/api/register', 
          data: data,
          })
          .then(function (response) {
            alert(response.data.message)
            navigation.push('LogIn')
          
          })
          .catch(function (error){
            console.log(error)
            alert(error)
        })
    }

    const Lougout = ({navigation}) => {
        update({"id": user.id, "is_available": 1})
        deleteToken(user.id)
        Clear();
        setToken("")
        setUser({})
        setIsLoggedin(false)
        setIsUser(false)
        
    }

    const getLiveLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
    
        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);      
    };

    return (
        <userContext.Provider
            value={{ user, LoggedIn, SignUpExpert, SignUpUser, Lougout, isLoggedin, isUser, token, setUser }}
        >
            {children}
        </userContext.Provider>
    )
};

export default UserProvider;

export const useUserInfo = () => {
    const {user, LoggedIn, Lougout, SignUpExpert, SignUpUser, isLoggedin, isUser, token, setUser} = React.useContext(userContext)

    return {
        user, LoggedIn, Lougout, SignUpExpert, SignUpUser, isLoggedin, isUser, token, setUser
    }
}