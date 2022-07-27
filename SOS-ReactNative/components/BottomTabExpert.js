import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpertHistory from './ExpertHistory/ExpertHistory';
import ExpertPage from './ExpertPage/ExpertPage';

const ExpertTab = createBottomTabNavigator();


export default function BottomTabExpert() {
    return (
        <ExpertTab.Navigator 
        screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: 'red',
            tabBarLabelPosition: "beside-icon",
            tabBarLabelStyle: {
            fontWeight: "500",
            fontSize: 20
            },
            tabBarIconStyle: { display: "none" }}}>
            <ExpertTab.Screen 
            name="Current" component={ExpertPage}
            options={{
                title: 'Current',
                headerStyle: {
                  backgroundColor: 'red'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 26,
                }}} />
            <ExpertTab.Screen 
            name="History" 
            component={ExpertHistory}
            options={{
                title: 'History',
                headerStyle: {
                  backgroundColor: 'red'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 26,
                }}}  />
        </ExpertTab.Navigator>
    )
}