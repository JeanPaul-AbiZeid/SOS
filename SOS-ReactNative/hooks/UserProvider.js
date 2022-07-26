import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { initializeFirestore, collection, doc, setDoc } from "firebase/firestore";
import * as Notifications from 'expo-notifications';

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

export const userContext = React.createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = React.useState({})
    const [token, setToken] = React.useState("")
    const [isLoggedin, setIsLoggedin] = React.useState(false)
    const [isUser, setIsUser] = React.useState(false)
    const [expoPushToken, setExpoPushToken] = React.useState('');

    React.useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
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
                if (response.data.user.role_id == 1) {
                    setIsUser(true)
                    updateToken(response.data.user.id, expoPushToken)
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
        Clear();
        setToken("")
        setUser({})
        setIsLoggedin(false)
        setIsUser(false)
        alert("logged out")
    }

    return (
        <userContext.Provider
            value={{ user, LoggedIn, SignUpExpert, SignUpUser, Lougout, isLoggedin, isUser, token }}
        >
            {children}
        </userContext.Provider>
    )
};

export default UserProvider;

export const useUserInfo = () => {
    const {user, LoggedIn, Lougout, SignUpExpert, SignUpUser, isLoggedin, isUser, token} = React.useContext(userContext)

    return {
        user, LoggedIn, Lougout, SignUpExpert, SignUpUser, isLoggedin, isUser, token
    }
}