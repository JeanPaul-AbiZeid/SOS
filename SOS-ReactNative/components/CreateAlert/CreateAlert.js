import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import * as Notifications from 'expo-notifications';
import {useUserInfo} from '../../hooks/UserProvider';
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import axios from 'axios';

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

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function CreateAlert() {
  const [image, setImage] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const {user} = useUserInfo();
  const titleRef = React.useRef();
  const descRef = React.useRef();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      // base64: true, //converting image to base64
    });
    if (!result.cancelled) {
      setImage(result);
    }
  }
  
  React.useEffect(() => {

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput 
      ref={titleRef}
      placeholder='Case Title' 
      style={styles.input}
      onChangeText={setTitle}/>
        
      <TextInput
      ref={descRef} 
      placeholder='Description' 
      multiline = {true}
      style={[styles.input, styles.description]}
      onChangeText={setDescription}/>
        

      <View style={styles.choose}>
          <Text>Upload image:</Text>
          <TouchableOpacity style={styles.upload} onPress={pickImage}>
              <Text>Choose image</Text>
          </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}
      onPress={() => {
      let data = {
        "title" : title,
        "description" : description,
        "image" : image.uri,
        "user_id" : user.id
      }
      axios({
          method: 'post',
          url: 'http://192.168.1.149:8000/api/createalert', 
          data: data,
          })
          .then(function (response) {
            titleRef.current.clear();
            descRef.current.clear();
            setImage("")
            alert("Alert Sent")
          
          })
          .catch(function (error){
              console.log(error)
      })
      async () => {
        await sendPushNotificationToAllUsers(user.id, user.first_name + ' ' + user.last_name, title);
      }
      }
        }>
          <Text style={styles.btnText}>Send Alert</Text>
      </TouchableOpacity>
        
        
    </ScrollView>
  );
}


async function sendPushNotification(expoPushToken, user, caseTitle) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: user,
    body: caseTitle,
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

const sendPushNotificationToAllUsers = async (id, userInfo, caseTitle) => {
  const users = await getDocs(collection(firestore, "users"));
  users.forEach((res) => {
    if (res.id != id) {
      sendPushNotification(res.data().token, userInfo, caseTitle)
    }
  });
}
