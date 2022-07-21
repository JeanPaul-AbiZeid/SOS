import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpertHistory from './ExpertHistory/ExpertHistory';
import ExpertPage from './ExpertPage/ExpertPage';

const ExpertTab = createBottomTabNavigator();


export default function BottomTabExpert() {
    return (
        <ExpertTab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'red',
            tabBarLabelPosition: "beside-icon",
            tabBarLabelStyle: {
            fontWeight: "500",
            fontSize: 20
            },
            tabBarIconStyle: { display: "none" }}}>
            <ExpertTab.Screen name="Current" component={ExpertPage} />
            <ExpertTab.Screen name="History" component={ExpertHistory} />
        </ExpertTab.Navigator>
    )
}