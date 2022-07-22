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

      <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Send Alert</Text>
      </TouchableOpacity>
        
        
    </ScrollView>
  );
}
