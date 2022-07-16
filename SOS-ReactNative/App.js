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
import Tracking from './components/Tracking/Tracking';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   {/* token?
    //   : */}
    //   <Stack.Navigator 
    //   screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="LogIn" component={LogIn} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="SignUpUser" component={SignUpUser} />
    //     <Stack.Screen name="SignUpExpert" component={SignUpExpert} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <Tracking/>
    
    
  );
}

