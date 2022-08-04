import {  ScrollView, Text, View, SafeAreaView, RefreshControl, FlatList} from 'react-native';
import React from "react";
import styles from './styles';
import { useUserInfo } from '../../hooks/UserProvider';
import { Entypo } from '@expo/vector-icons'; 
import axios from 'axios';
import * as Location from 'expo-location';

const Case = ({ item }) => {
  const [name, setName] = React.useState("")

  console.log(name)
  console.log(item)
  const getAddress = async () => {
      let pos = {
        latitude: item.user_lat,
        longitude: item.user_long
      };
      let address = await Location.reverseGeocodeAsync(pos);
      
      setName(`${address[0].city}, ${address[0].country}`)
    }

  React.useEffect(()=>{
    getAddress()
  },[])

  return (
    
    <View style={styles.main1}>
      
      <Text style={styles.name}>{item.user_info.first_name} {item.user_info.last_name}</Text>
      <View style={styles.loc}>
          <Entypo name="location-pin" size={20} color="red" />
          <Text>{name}</Text>
      </View>
      
    </View>
  );
};

export default function ExpertHistory() {
  const [refreshing, setRefreshing] = React.useState(true);
  const [expertData, setExpertData] = React.useState([]);
  const {user, axiosUrl, token} = useUserInfo();

  const ItemDivider = () => {
    return (
      <View
        style={styles.divider}
      />
    );
  }

  //getting expert cases
  const loadExpertData = () => {
    axios({
      method: 'get',
      url: axiosUrl + 'getcases/' + `${user.id}`,
      headers: {'Authorization': `token ${token}`},
      })
      .then(function (response) {
        setRefreshing(false);
        setExpertData(response.data.cases);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    loadExpertData();
  }, []);

  return (
    <View style={styles.container}>
      {expertData?.length > 0?
      <SafeAreaView>
        <FlatList
          data={expertData.reverse()}
          keyExtractor={(item, index) => index.toString()}
          enableEmptySections={true}
          ItemSeparatorComponent={ItemDivider}
          renderItem={({ item, index} ) => ( <Case item={item} key= {index} /> )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadExpertData} />
          }
        />
      </SafeAreaView>:
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={loadExpertData}
            />
          }
        >
          <Text>No Finished Cases Yet</Text>
        </ScrollView>
      </SafeAreaView>}
    </View>
    
  );
}
