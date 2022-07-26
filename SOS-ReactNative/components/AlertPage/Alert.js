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
          <Image style={styles.img} source={require('../../assets/persona.png')}/>   
          <Text style={styles.name}>{first_name} {last_name}</Text>
      </View>

      <Text style={styles.case}>Alert Case</Text>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.case}>Description</Text>
      <Text style={styles.desc}>{description}</Text>

      <Image style={styles.image} source={require('../../assets/persona.png')}/>
        
    </ScrollView>
  );
  }