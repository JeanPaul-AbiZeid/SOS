import { Text, View, Image, ScrollView } from 'react-native';
import React from "react";
import styles from './styles';

export default function Alert() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.main}>
            <Image style={styles.img} source={require('../../assets/persona.png')}/>   
            <Text style={styles.name}>John Doe</Text>
        </View>

        <Text style={styles.case}>Alert Case</Text>
        <Text style={styles.title}>Missing Person</Text>

        <Text style={styles.title}>Description</Text>
        <Text style={styles.desc}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Text>

        <Image style={styles.image} source={require('../../assets/persona.png')}/>
          
      </ScrollView>
    );
  }