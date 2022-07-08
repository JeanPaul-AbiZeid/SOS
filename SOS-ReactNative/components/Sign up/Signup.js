import React from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import DatePicker from 'react-native-modern-datepicker';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { toggle } from '../../hooks/toggle';

export default function Signup() {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = toggle();
  return (
    <View style={styles.main}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>SOS</Text>
      <Text style={styles.head}>Sign Up</Text>
      <View>
        <Text>First Name</Text>
        <TextInput placeholder='First Name' style={styles.input}/>
      </View>
      
      <View>
        <Text>Last Name</Text>
        <TextInput placeholder='Last Name' style={styles.input}/>
      </View>
      
      <View>
        <Text>Email</Text>
        <TextInput placeholder='Email' style={styles.input}/>
      </View>
      
      <View>
        <Text>Password</Text>
        <View style={[styles.input, styles.password]}><TextInput 
        placeholder='Password'
        secureTextEntry={passwordVisibility}
        onChangeText={newText => setPassword(newText)}/>
        <Pressable onPress={handlePasswordVisibility}><MaterialCommunityIcons name={rightIcon} size={22} color="#232323" /></Pressable></View>
      </View>
      
      <View>
        <Text>Phone Number</Text>
        <TextInput placeholder='Phone' style={styles.input}/>
      </View>
      
      <Text>Blood type</Text>
      <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: "O+", value: "O+" },
                { label: "O-", value: "O-" },
                { label: "A+", value: "A+" },
                { label: "A-", value: "A-" },
                { label: "B+", value: "B+" },
                { label: "B-", value: "B-" },
                { label: "AB+", value: "AB+" },
                { label: "AB-", value: "AB-" },
            ]}
        />
        <Text>Date of Birth</Text>
        <DatePicker mode="calendar"/>
        <Text>Gender</Text>
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Other", value: "Other" },
            ]}
        />
      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Sign Up</Text>
      </Pressable>
    </ScrollView>
    </View>
  );
}