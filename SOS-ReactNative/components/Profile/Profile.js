import { Text, View, Image, ScrollView } from 'react-native';
import React from "react";
import styles from './styles';

export default function Profile() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.main}>
            <Image style={styles.img} source={require('../../assets/persona.png')}/>   
            <Text style={styles.name}>John Doe</Text>
        </View>

          
      </ScrollView>
    );
  }