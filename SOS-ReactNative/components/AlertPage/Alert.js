import { Text, View, Image, ScrollView } from 'react-native';
import React from "react";
import styles from './styles';

export default function Alert({route}) {

  const { 
    first_name, 
    last_name,
    title,
    description,
    image,
    profilePicture } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
          {profilePicture? <Image style={styles.img} source={{uri:"data:image/png;base64," + profilePicture}}/>:<Image style={styles.img} source={require('../../assets/persona.png')}/>}   
          <Text style={styles.name}>{first_name} {last_name}</Text>
      </View>

      <Text style={styles.case}>Alert Case</Text>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.case}>Description</Text>
      <View style={styles.descContainer}>
        <Text style={styles.desc}>{description}</Text>
      </View>
      
      {image && <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:"data:image/png;base64," + image}}/>
      </View>}
      
        
    </ScrollView>
  );
  }