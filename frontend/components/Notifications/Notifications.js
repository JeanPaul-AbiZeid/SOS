import { Text, View, RefreshControl, FlatList, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from "react";
import styles from './styles';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios';

export default function Notification({navigation}) {
  const [refreshing, setRefreshing] = React.useState(true);
  const [userData, setUserData] = React.useState([]);
  const {user, axiosUrl, token} = useUserInfo();

  const alert = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.push('Alert',
      {//sending params to child
        first_name: item.user_info.first_name,
        last_name: item.user_info.last_name,
        title: item.title,
        description: item.description,
        image: item.image,
        profilePicture: item.user_info.picture
      })}>
      <View style={styles.main1}>
        {item.user_info.picture? <Image style={styles.img} source={{uri: "data:image/png;base64," + item.user_info.picture}}/>:<Image style={styles.img} source={require('../../assets/persona.png')}/>}
        <View style={styles.text}>
            <Text style={styles.name}>{item.user_info.first_name} {item.user_info.last_name}</Text>
            <Text style={styles.desc}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
    );
  };

  const ItemDivider = () => {
    return (
      <View
        style={styles.divider}
      />
    );
  }

  //getting all alerts
  const loadUserData = () => {
    axios({
      method: 'get',
      url: axiosUrl + 'getalerts/' + `${user.id}`,
      headers: {'Authorization': `token ${token}`},
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
    <View style={styles.container}>
      {userData?.length > 0?
      <SafeAreaView>
        <FlatList
          data={userData.reverse()}
          keyExtractor={(item, index) => index.toString()}
          enableEmptySections={true}
          ItemSeparatorComponent={ItemDivider}
          renderItem={alert}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
          }
        />
      </SafeAreaView>:<SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadUserData}
          />
        }
      >
        <Text style={styles.conditionTitle}>No Notications Yet</Text>
      </ScrollView>
    </SafeAreaView>}
    </View>
    
    
  );
}
