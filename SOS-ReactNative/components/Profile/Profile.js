import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from "react";
import styles from './styles';
import { Fontisto, Feather, MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

export default function Profile() {
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
      <ScrollView style={styles.container}>
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={ require('../../assets/persona.png') }/>
                <View style={styles.uploadBtnContainer}>
                    <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
                        <Text>Change Image</Text>
                        <AntDesign name="camera" size={20} color="black" />
                    </TouchableOpacity>
                </View>  
            </View>
             
            <Text style={styles.name}>John Doe</Text>
        </View>

        <View style={styles.box}>
            <MaterialIcons name="my-location" size={24} color="gray" />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Address</Text>
                <Text style={styles.info}>Lebanon</Text>
            </View>
            <MaterialIcons name="edit" size={24} color="gray" />
        </View>

        <View style={styles.box}>
            <Fontisto name="blood-drop" size={24} color="gray" />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Blood Type</Text>
                <Text style={styles.info}>A+</Text>
            </View>
            <MaterialIcons name="edit" size={24} color="gray" />
        </View>

        <View style={styles.box}>
            <Feather name="calendar" size={24} color="gray" />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Age</Text>
                <Text style={styles.info}>24</Text>
            </View>
            <MaterialIcons name="edit" size={24} color="gray" />
        </View>

        <View style={styles.box}>
            <FontAwesome name="phone" size={24} color="gray" />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Phone</Text>
                <Text style={styles.info}>71125413</Text>
            </View>
            <MaterialIcons name="edit" size={24} color="gray" />
        </View>

        <View style={styles.box}>
            <MaterialIcons name="contacts" size={24} color="gray" />
            <View style={styles.margin}>
                <Text style={styles.title}>Preffered Contact</Text>
                <Text style={styles.info}>Jane Doe</Text>
            </View>
            <MaterialIcons name="edit" size={24} color="gray" />
        </View>
          
      </ScrollView>
    );
  }