import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import * as Notifications from 'expo-notifications';
import {useUserInfo} from '../../hooks/UserProvider';
import { collection, doc, getDocs } from "firebase/firestore";
import axios from 'axios';
import RedButton from '../RedButton/RedButton';
import {firestore} from '../firebase';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
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
  const {user, axiosUrl, token} = useUserInfo();
  const titleRef = React.useRef();
  const descRef = React.useRef();

  //pick image function
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true, //converting image to base64
    });
    if (!result.cancelled) {
      setImage(result.base64);
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
      
      <Text style={styles.label}>Title</Text>
      <TextInput 
      ref={titleRef}
      placeholder='Case Title' 
      style={styles.input}
      onChangeText={setTitle}/>
      
      <Text style={styles.label}>Description</Text>
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

      <RedButton 
        styling={styles.button}
        text="Send Alert"
        onPress={() => {
          let data = {
            "title" : title,
            "description" : description,
            "image" : image,
            "user_id" : user.id
          }
          axios({
            method: 'post',
            url: axiosUrl + 'createalert', 
            headers: {'Authorization': `token ${token}`},
            data: data,
            })
          .then(function (response) {
            sendPushNotificationToAllUsers(user.id, user.first_name + ' ' + user.last_name, title);
            titleRef.current.clear();
            descRef.current.clear();
            setImage("")
            alert("Alert Sent")
          
          })
          .catch(function (error){
            console.log(error)
            titleRef.current.clear();
            descRef.current.clear();
            alert("Alert Not sent please try again")
          })
        }}
      />
    </ScrollView>
  );
}

//send notification function
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
  //getting all users
  const users = await getDocs(collection(firestore, "users"));
  users.forEach((res) => {
    if (res.id != id) {
      sendPushNotification(res.data().token, userInfo, caseTitle)
    }
  });
}
