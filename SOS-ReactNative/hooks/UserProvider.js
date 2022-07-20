import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key , value)
    } catch (e) {
      console.log(e)
    }
}

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

export const userContext = React.createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = React.useState({})
    const [isLoggedin, setIsLoggedin] = React.useState(false)
    const [isExpert, setIsExpert] = React.useState(false)

    const LoggedIn = (email, password) => {
        let data = {
            "email": email,
            "password": password,
          }

          axios({
            method: 'post',
            url: 'http://192.168.1.149:8000/api/login', 
            data: data,
            })
            .then(function (response) {
              storeData('token', response.data.authorisation.token)
              setUser(response.data.user)
              if (response.data.user.role_id == 1) {
                navigation.push('HomePage')
              }else{
                navigation.push('ExpertPage')
                setIsExpert(true)
              }
            
            })
            .catch(function (error){
              console.log(error)
              alert("Incorrect email or password");
          })
    }

    const SignUpExpert = (first_name, last_name, email, password, role) => {
        let data = {
            "first_name" : first_name,
            "last_name" : last_name,
            "email" : email,
            "password" : password,
            "role_id" : role,
        }
        axios({
            method: 'post',
            url: 'http://192.168.1.149:8000/api/register', 
            data: data,
            })
            .then(function (response) {
                alert(response.data.message)
                navigation.push('LogIn')
            
            })
            .catch(function (error){
                console.log(error)
                alert(error)
        })
    }

    return (
        <userContext.Provider
            value={{ user, LoggedIn, SignUpExpert }}
        >
            {children}
        </userContext.Provider>
    )
};

export default UserProvider;

export const useUserInfo = () => {
    const {user, LoggedIn, lougout, SignUpExpert} = React.useContext(userContext)

    return {
        user, LoggedIn, lougout, SignUpExpert
    }
}