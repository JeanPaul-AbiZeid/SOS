import {  ScrollView, Text, View } from 'react-native';
import React from "react";
import styles from './styles';
import ExpertNotification from '../ExpertNotification/ExpertNotification';


export default function ExpertHistory() {

  return (
    <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.notification}>
                <ExpertNotification/>
                <ExpertNotification/>
                <ExpertNotification/>
                <ExpertNotification/>
                <ExpertNotification/>
                <ExpertNotification/>
                <ExpertNotification/>
                <ExpertNotification/>
                <ExpertNotification/>
            </View>
        
        </ScrollView>
    </View>
    
    
  );
}
