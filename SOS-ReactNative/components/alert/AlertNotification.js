import { Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import React from "react";
import styles from './styles';

export default function alert({navigation}) {

  return (
    <TouchableOpacity onPress={() => navigation.push('Alert')}>
      <View style={styles.main}>
        <Image style={styles.img} source={require('../../assets/persona.png')}/>
        <View style={styles.text}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.desc} numberOfLines={3}>Notification description is here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
      </View>
    </TouchableOpacity>
    
  );
}
