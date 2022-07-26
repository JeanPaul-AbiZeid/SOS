import {  ScrollView, Text, View, ActivityIndicator } from 'react-native';
import React from "react";
import styles from './styles';
import AlertNotification from '../alert/AlertNotification'


export default function Notification({navigation}) {
  const [refreshing, setRefreshing] = React.useState(true);
  const [userData, setUserData] = React.useState([]);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Notification</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>

      {/* {refreshing ? <ActivityIndicator /> : null} */}

    
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
        <AlertNotification navigation={navigation} />
      
      
      </ScrollView>
    </View>
    
    
  );
}
