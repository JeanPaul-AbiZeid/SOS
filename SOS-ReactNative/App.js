import CreateAlert from './components/CreateAlert/CreateAlert';
import Home from './components/Home/Home';
import LogIn from './components/Login/Login';
import Notification from './components/Notification/Notification';
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

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
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


export default function App() {
  return (
    <NavigationContainer>
      {/* token?
      : */}
      {/* <Stack.Navigator 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpUser" component={SignUpUser} />
        <Stack.Screen name="SignUpExpert" component={SignUpExpert} />
      </Stack.Navigator> */}

      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="Tracking" component={Tracking} />
        <Tab.Screen name="NotificationStack" component={NotificationStackScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>

      
    </NavigationContainer>

    
    
    
  );
}

