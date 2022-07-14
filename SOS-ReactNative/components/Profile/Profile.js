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

        <View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Address</Text>
                <Text style={styles.info}>Lebanon</Text>
            </View>
        </View>

        <View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Blood Type</Text>
                <Text style={styles.info}>A+</Text>
            </View>
        </View>

        <View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Age</Text>
                <Text style={styles.info}>24</Text>
            </View>
        </View>

        <View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Phone</Text>
                <Text style={styles.info}>71125413</Text>
            </View>
        </View>

        <View>
            <View>
                <Text style={styles.title}>Preffered Contact</Text>
                <Text style={styles.info}>Jane Doe</Text>
            </View>
        </View>
          
      </ScrollView>
    );
  }