import React from 'react';
import CreateAlert from './components/CreateAlert/CreateAlert';
import Home from './components/Home/Home';
import LogIn from './components/Login/Login';
import Notification from './components/Notifications/Notifications';
import Alert from './components/AlertPage/Alert';
import Profile from './components/Profile/Profile';
import SignUpExpert from './components/SignUpExpert/SignUpExpert';
import SignUpUser from './components/SignUpUser/SignUpUser';
import SignUp from './components/SignUp/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tracking from './components/Tracking/Tracking';
import ExpertPage from './components/ExpertPage/ExpertPage';
import ExpertHistory from './components/ExpertHistory/ExpertHistory';
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ExpertTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="CreateAlert" component={CreateAlert} />
      </HomeStack.Navigator>
    );
}

function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator screenOptions={{headerShown: false}}>
      <NotificationStack.Screen name="Notification" component={Notification} />
      <NotificationStack.Screen name="Alert" component={Alert} />
    </NotificationStack.Navigator>
  );
}

function HomeTabs() {
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
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle-outline" size={30} color={color} />
        ),
      }} />
    </Tab.Navigator>
  )
}

function ExpertTabs() {
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


export default function App() {
  return (
    <NavigationContainer>
      {/* token?
      : */}
      <Stack.Navigator 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpUser" component={SignUpUser} />
        <Stack.Screen name="SignUpExpert" component={SignUpExpert} />
        <Stack.Screen name="HomePage" component={HomeTabs} />
        <Stack.Screen name="ExpertPage" component={ExpertTabs} />


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

