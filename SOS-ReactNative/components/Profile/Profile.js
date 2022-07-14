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
            <View>
                <Text>Address</Text>
                <Text>Lebanon</Text>
            </View>
        </View>

        <View>
            <View>
                <Text>Blood Type</Text>
                <Text>A+</Text>
            </View>
        </View>

        <View>
            <View>
                <Text>Age</Text>
                <Text>24</Text>
            </View>
        </View>

        <View>
            <View>
                <Text>Phone</Text>
                <Text>71125413</Text>
            </View>
        </View>

        <View>
            <View>
                <Text>Preffered Contact</Text>
                <Text>Jane Doe</Text>
            </View>
        </View>
          
      </ScrollView>
    );
  }