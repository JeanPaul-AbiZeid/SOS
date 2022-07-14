import { Text, View, Image, ScrollView } from 'react-native';
import React from "react";
import styles from './styles';
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

export default function Profile() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.main}>
            <Image style={styles.img} source={require('../../assets/persona.png')}/>   
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