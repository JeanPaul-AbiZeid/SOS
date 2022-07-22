import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function CreateAlert() {
  const [image, setImage] = React.useState(null);
  const [expoPushToken, setExpoPushToken] = React.useState('');
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

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
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

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
      style={styles.input}/>
        
      <TextInput 
      placeholder='Description' 
      multiline = {true}
      style={[styles.input, styles.description]}/>
        

      <View style={styles.choose}>
          <Text>Upload image:</Text>
          <TouchableOpacity style={styles.upload} onPress={pickImage}>
              <Text>Choose image</Text>
          </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}
      onPress={async () => {
        await schedulePushNotification();
        alert(expoPushToken)
      }}>
          <Text style={styles.btnText}>Send Alert</Text>
      </TouchableOpacity>
        
        
    </ScrollView>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
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
  console.log(token);
 
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
