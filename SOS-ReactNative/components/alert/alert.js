import { Text, View } from 'react-native';
import React from "react";
import styles from './styles';

export default function alert() {

  return (
    <View style={styles.main}>
        <Image style={styles.img} source={require('../../assets/persona.png')}/>
        <View>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.desc}>Notification</Text>
        </View>
    </View>
  );
}
