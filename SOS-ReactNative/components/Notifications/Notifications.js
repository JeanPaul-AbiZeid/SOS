import { Text, View, RefreshControl, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from "react";
import styles from './styles';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios';


export default function Notification({navigation}) {
  const [refreshing, setRefreshing] = React.useState(true);
  const [userData, setUserData] = React.useState([]);
  const {user} = useUserInfo();

  const alert = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.push('Alert')}>
      <View style={styles.main1}>
        <Image style={styles.img} source={require('../../assets/persona.png')}/>
        <View style={styles.text}>
            <Text style={styles.name}>{item.user_info.first_name}{item.user_info.last_name}</Text>
            <Text style={styles.desc}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
    );
  };

  const loadUserData = () => {
    axios({
      method: 'get',
      url: 'http://192.168.1.149:8000/api/getalerts/' + `${user.id}`,
      })
      .then(function (response) {
        setRefreshing(false);
        setUserData(response.data.alerts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    loadUserData();
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Notification</Text>
      </View>
      
    </View>
    
    
  );
}
