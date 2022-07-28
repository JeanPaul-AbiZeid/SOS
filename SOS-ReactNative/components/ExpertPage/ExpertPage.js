import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios'; 

export default function ExpertPage() {
  const {user} = useUserInfo();
  const [userFName, setUserFName] = React.useState("")
  const [userLName, setUserLName] = React.useState("")
  const [userBlood, setUserBlood] = React.useState("")
  const [userDob, setUserDob] = React.useState("")
  const [userGender, setUserGender] = React.useState("")

  const getCase = () => {
    axios({
      method: 'get',
      url: 'http://192.168.1.149:8000/api/getcase/' + `${user.id}`,
      })
      .then(function (response) {
        console.log(response.data.case[0])
        setUserFName(response.data.case[0].user_info.first_name)
        setUserLName(response.data.case[0].user_info.last_name)
        setUserBlood(response.data.case[0].user_info.blood_type)
        setUserDob(response.data.case[0].user_info.dob)
        setUserGender(response.data.case[0].user_info.gender)
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        getCase()
      }}><Text>clicl</Text></TouchableOpacity>
        <View style={styles.info}>
            <Text style={styles.title}>{userLName} {userLName}</Text>            
            <Text>Gender: {userGender}</Text>
            <Text>Date of Birth: {userDob}</Text>
            <Text>Blood Type: {userBlood}</Text>
        </View>
        
        <Text style={styles.direction}>Direction</Text>
        <View style={styles.map}></View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
    </View>
  );
}