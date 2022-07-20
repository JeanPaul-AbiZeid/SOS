import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        console.log(value)
      }
    } catch(e) {
      console.log(e)
    }
}

const user_id = getData("id")

export const userContext = React.createContext()

const UserProvider = ({children}) => {
    let data = {
        "id": user_id
      }
    axios({
        method: 'post',
        url: 'http://192.168.1.149:8000/api/userinfo', 
        data: data,
        })
        .then(function (response) {
            const id = user_id
            const first_name = response.user.first_name
            const last_name = response.user.last_name
            const picture = response.user.picture
            const blood_type = response.user.blood_type
            const gender = response.user.gender
            const dob = response.user.dob
            const number = response.user.number
            const preffered_contact = response.user.preffered_contact
        
        })
        .catch(function (error){
          console.log(error)
          alert("Incorrect email or password");
      })

    

    return (
        <userContext.Provider
            value={{
                id, first_name, last_name, picture, blood_type, gender, dob, preffered_contact, number
            }}
        >
            {children}
        </userContext.Provider>
    )
};

export default UserProvider;

export const useUserInfo = () => {
    const {id, first_name, last_name, picture, blood_type, gender, dob, preffered_contact, number} = React.useContext(userContext)

    return {
        id, first_name, last_name, picture, blood_type, gender, dob, preffered_contact, number
    }
}