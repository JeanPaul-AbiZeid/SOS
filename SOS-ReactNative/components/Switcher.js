import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useUserInfo } from '../hooks/UserProvider';
import BottomTabExpert from "./BottomTabExpert";
import BottomTabUser from "./BottomTabUser";
import LoginStack from "./LoginStack";

export default function Switcher() {
    const {token, isUser} = useUserInfo();

    return (
        //condition to show stacks
        <NavigationContainer>
            {!token? <LoginStack/> : isUser? <BottomTabUser/> :<BottomTabExpert/>}
        </NavigationContainer>
    )
}