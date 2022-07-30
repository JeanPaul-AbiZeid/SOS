import React from 'react';
import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import styles from './styles';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { toggle } from '../../hooks/toggle';
import { useUserInfo } from '../../hooks/UserProvider';
import RedButton from '../RedButton/RedButton';

export default function SignUpExpert({navigation}) {
    const [first_name, setFname] = React.useState("");
    const [last_name, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = toggle();
    const {SignUpExpert} = useUserInfo();
    
  return (
    <View style={styles.main}>
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>SOS</Text>
        <View style={styles.inputContainer}>
            <Text>First Name</Text>
            <TextInput 
            placeholder='First Name' 
            style={styles.input}
            onChangeText={setFname}/>
        </View>
      
        <View style={styles.inputContainer}>
            <Text>Last Name</Text>
            <TextInput 
            placeholder='Last Name' 
            style={styles.input}
            onChangeText={setLname}/>
        </View>
      
        <View style={styles.inputContainer}>
            <Text>Email</Text>
            <TextInput 
            placeholder='Email' 
            style={styles.input}
            onChangeText={setEmail}/>
        </View>
      
        <View style={styles.inputContainer}>
            <Text>Password</Text>
            <View style={[styles.input, styles.password]}>
                <TextInput 
                    placeholder='Password'
                    secureTextEntry={passwordVisibility}
                    onChangeText={setPassword}/>
                <Pressable onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                </Pressable>
            </View>
        </View>
      
        <View style={styles.dropdown}>
            <Text>Role</Text>
            <View style={styles.input}>
                <RNPickerSelect
                placeholder={{
                label: 'Select your role',
                value: null,
                }}
                Icon={() => {
                    return <Octicons name="triangle-down" size={24} color="black" />
                  }}
                useNativeAndroidPickerStyle={false}
                fixAndroidTouchableBug={true}
                onValueChange={setRole}
                items={[
                    { label: "Policeman", value: 2 },
                    { label: "Firefighter", value: 3 },
                    { label: "Rescuer", value: 4 },
                ]}
            />
            </View>
            
        </View>

        <RedButton 
            styling={styles.button} 
            text="Sign Up" 
            onPress={() => {
                SignUpExpert(first_name, last_name, email, password, role, {navigation})
            }}
        />
    </ScrollView>
    </View>
  );
}