import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './Login/Login';
import SignUp from './SignUp/SignUp';
import SignUpExpert from './SignUpExpert/SignUpExpert';
import SignUpUser from './SignUpUser/SignUpUser';

const Stack = createNativeStackNavigator();


export default function LoginStack() {
    return (
        <Stack.Navigator 
        screenOptions={{headerShown: false}}>
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignUpUser" component={SignUpUser} />
          <Stack.Screen name="SignUpExpert" component={SignUpExpert} />
        </Stack.Navigator>
    )
}