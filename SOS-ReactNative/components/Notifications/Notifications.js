import { Text, View, RefreshControl, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from "react";
import styles from './styles';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios';


export default function Notification({navigation}) {
  const [refreshing, setRefreshing] = React.useState(true);
  const [userData, setUserData] = React.useState([]);
  const {user} = useUserInfo();


  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Notification</Text>
      </View>
      
    </View>
    
    
  );
}
