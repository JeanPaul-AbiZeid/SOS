import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import * as Notifications from 'expo-notifications';
import {useUserInfo} from '../../hooks/UserProvider'

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true, //converting image to base64
    });

    console.log(result);

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
      <TextInput 
      placeholder='Case Title' 
      style={styles.input}
      onChangeText={setTitle}/>
        
      <TextInput 
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
      onPress={async () => {
        await sendPushNotification(expoPushToken, user.first_name + ' ' + user.last_name, title);
        alert(expoPushToken)
      }}>
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
