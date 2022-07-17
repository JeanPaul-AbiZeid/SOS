import React from 'react';
import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { toggle } from '../../hooks/toggle';

export default function SignUpExpert() {
    const [first_name, setFname] = React.useState("");
    const [last_name, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = toggle();
  return (
    <View style={styles.main}>
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>SOS</Text>
        <Text style={styles.head}>Sign Up</Text>
        <View>
            <Text>First Name</Text>
            <TextInput 
            placeholder='First Name' 
            style={styles.input}
            onChangeText={setFname}/>
        </View>
      
        <View>
            <Text>Last Name</Text>
            <TextInput 
            placeholder='Last Name' 
            style={styles.input}
            onChangeText={setLname}/>
        </View>
      
        <View>
            <Text>Email</Text>
            <TextInput 
            placeholder='Email' 
            style={styles.input}
            onChangeText={setEmail}/>
        </View>
      
        <View>
            <Text>Password</Text>
            <View style={[styles.input, styles.password]}><TextInput 
            placeholder='Password'
            secureTextEntry={passwordVisibility}
            onChangeText={setPassword}/>
            <Pressable onPress={handlePasswordVisibility}><MaterialCommunityIcons name={rightIcon} size={22} color="#232323" /></Pressable></View>
        </View>
      
        <View>
            <Text>Role</Text>
            <View style={styles.dropdown}>
            <RNPickerSelect
                    placeholder={{
                    label: 'Select your role',
                    value: null,
                    }}
                    onValueChange={setRole}
                    items={[
                        { label: "Policeman", value: 2 },
                        { label: "Firefighter", value: 3 },
                        { label: "Rescuer", value: 4 },
                    ]}
                />
            </View>
        </View>
    
        <TouchableOpacity style={styles.button}>
            <Text 
            style={styles.btnText}
            onPress={() => {
                let data = new FormData();
                data.append('first_name', first_name);
                data.append('last_name', last_name);
                data.append('email', email);
                data.append('password', password);
                data.append('role', role);

                console.log(first_name)
                console.log(last_name)
                console.log(email)
                console.log(password)
                console.log(role)
            }
            }>Sign Up</Text>
        </TouchableOpacity>
    </ScrollView>
    </View>
  );
}