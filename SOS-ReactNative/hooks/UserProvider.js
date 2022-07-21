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

const Clear = async () => {
    await AsyncStorage.clear();
}

export const userContext = React.createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = React.useState({})
    const [token, setToken] = React.useState("")
    const [isLoggedin, setIsLoggedin] = React.useState(false)
    const [isExpert, setIsExpert] = React.useState(false)

    const LoggedIn = (email, password, {navigation}) => {
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
                setToken(response.data.authorisation.token)
                if (response.data.user.role_id == 1) {
                    navigation.push('HomePage')
                    setIsLoggedin(true)
                }else{
                    navigation.push('ExpertPage')
                    setIsExpert(true)
                    setIsLoggedin(true)
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

    const SignUpUser = (first_name, last_name, email, password, phone, blood_type, date, gender, {navigation}) => {
        let data = {
            "first_name" : first_name,
            "last_name" : last_name,
            "email" : email,
            "password" : password,
            "number" : phone,
            "blood_type" : blood_type,
            "dob" : date.toLocaleDateString(),
            "gender" : gender,
            "role_id" : 1,
        }

        axios({
          method: 'post',
          url: 'http://192.168.1.149:8000/api/register', 
          data: data,
          })
          .then(function (response) {
            alert(response.data.message)
            console.log(response)
            navigation.push('LogIn')
          
          })
          .catch(function (error){
            console.log(error)
            alert(error)
        })
    }

    const Lougout = () => {
        Clear();
        setIsLoggedin(false)
        navigation.push('LogIn')
    }

    return (
        <userContext.Provider
            value={{ user, LoggedIn, SignUpExpert, SignUpUser, Lougout, isLoggedin, isExpert, token }}
        >
            {children}
        </userContext.Provider>
    )
};

export default UserProvider;

export const useUserInfo = () => {
    const {user, LoggedIn, Lougout, SignUpExpert, SignUpUser, isLoggedin, isExpert, token} = React.useContext(userContext)

    return {
        user, LoggedIn, Lougout, SignUpExpert, SignUpUser, isLoggedin, isExpert, token
    }
}