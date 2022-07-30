import {  ScrollView, Text, View, SafeAreaView, RefreshControl, FlatList} from 'react-native';
import React from "react";
import styles from './styles';
import { useUserInfo } from '../../hooks/UserProvider';
import { Entypo } from '@expo/vector-icons'; 
import axios from 'axios';

export default function ExpertHistory() {
  const [refreshing, setRefreshing] = React.useState(true);
  const [expertData, setExpertData] = React.useState([]);
  const {user} = useUserInfo();

  const Case = ({ item }) => {
    return (
      
      <View style={styles.main1}>
        
        <Text style={styles.name}>{item.user_info.first_name} {item.user_info.last_name}</Text>
        <View style={styles.loc}>
            <Entypo name="location-pin" size={20} color="red" />
            <Text>{item.user_long}</Text>
        </View>
        
      </View>
    );
  };

  const ItemDivider = () => {
    return (
      <View
        style={styles.divider}
      />
    );
  }

  const loadExpertData = () => {
    axios({
      method: 'get',
      url: 'http://192.168.1.149:8000/api/getcases/' + `${user.id}`,
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
          renderItem={Case}
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
