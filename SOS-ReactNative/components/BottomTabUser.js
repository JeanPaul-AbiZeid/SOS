import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import CreateAlert from './CreateAlert/CreateAlert';
import Notification from './Notifications/Notifications';
import Alert from './AlertPage/Alert';
import Tracking from './Tracking/Tracking';
import Profile from './Profile/Profile';
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{headerShown: true}}>
        <HomeStack.Screen 
        name="Home"
        component={Home}
        options={{
          title: 'SOS',
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 26,
          },
        }} />
        <HomeStack.Screen 
        name="CreateAlert" 
        component={CreateAlert}
        options={{
          title: 'Create Alert',
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 26,
          },
        }} />
      </HomeStack.Navigator>
    );
}

function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator screenOptions={{headerShown: true}}>
      <NotificationStack.Screen 
      name="Notification" 
      component={Notification}
      options={{
        title: 'Notifications',
        headerStyle: {
          backgroundColor: 'red'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 26,
        },
      }} />
      <NotificationStack.Screen 
      name="Alert" component={Alert}
      options={{
        title: 'Alert',
        headerStyle: {
          backgroundColor: 'red'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 26,
        },
      }} />
    </NotificationStack.Navigator>
  );
}

export default function BottomTabUser() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: 'red', tabBarShowLabel: false}}>
            <Tab.Screen name="HomeStack" component={HomeStackScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                <Entypo name="home" size={30} color={color} />
                ),
            }}/>
            <Tab.Screen name="Tracking" component={Tracking}
            options={{
              title: 'Tracking',
              headerStyle: {
                backgroundColor: 'red'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 26,
              },
              headerShown: true,
              tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="route" size={30} color={color} />
              ),
            }} />
            <Tab.Screen name="NotificationStack" component={NotificationStackScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                <Ionicons name="notifications" size={30} color={color} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile}
            options={{
              title: 'Profile',
              headerStyle: {
                backgroundColor: 'red'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 26,
              },
              
              headerShown: true,
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" size={30} color={color} />
              ),
            }} />
        </Tab.Navigator>
    )
}