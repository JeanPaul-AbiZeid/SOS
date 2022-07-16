import { Text, View } from 'react-native';
import React from "react";
import styles from './styles';
import { Entypo } from '@expo/vector-icons'; 

export default function ExpertNotification() {

  return (
    <View style={styles.container}>
        <Text style={styles.name}>John Doe</Text>
        <View style={styles.loc}>
            <Entypo name="location-pin" size={20} color="red" />
            <Text>Location</Text>
        </View>
    </View>
  );
}
