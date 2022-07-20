import React from 'react';
import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { toggle } from '../../hooks/toggle';
import axios from 'axios';

export default function SignUpUser({navigation}) {
    const [first_name, setFname] = React.useState("");
    const [last_name, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [blood_type, setBtype] = React.useState("");
    const [gender, setGender] = React.useState("");
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = toggle();
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = () => {
      setShow(true);
      setMode('date');
    };

  return (
    <View style={styles.main}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>SOS</Text>
      <Text style={styles.head}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text>First Name</Text>
        <TextInput placeholder='First Name' style={styles.input} onChangeText={setFname}/>
      </View>
      
      <View style={styles.inputContainer}>
        <Text>Last Name</Text>
        <TextInput placeholder='Last Name' style={styles.input} onChangeText={setLname}/>
      </View>
      
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput placeholder='Email' style={styles.input} onChangeText={setEmail} />
      </View>
      
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <View style={[styles.input, styles.password]}><TextInput 
        placeholder='Password'
        secureTextEntry={passwordVisibility}
        onChangeText={setPassword}/>
        <Pressable onPress={handlePasswordVisibility}><MaterialCommunityIcons name={rightIcon} size={22} color="#232323" /></Pressable></View>
      </View>
      
      <View style={styles.inputContainer}>
        <Text>Phone Number</Text>
        <TextInput placeholder='Phone' style={styles.input} onChangeText={setPhone}/>
      </View>
      
      <View style={styles.dropdown}>
        <Text>Blood type</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select a blood type',
            value: null,
          }}
          onValueChange={setBtype}
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
      </View>
      
      <View style={styles.calendar}>
        <Text>Date of Birth (month/day/year)</Text>
        <TouchableOpacity style={styles.buttonCalendar} onPress={showMode}>
          <Text style={styles.calendarText}>Show Calendar</Text>
          </TouchableOpacity>
        <Text>Selected: {date.toLocaleDateString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            onChange={onChange}
          />
        )}
      </View>
      
      <View style={styles.dropdown}>
        <Text>Gender</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select a gender',
            value: null,
          }}
          onValueChange={setGender}
          items={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ]}
        />
      </View>
        
      <TouchableOpacity 
        style={styles.button}
        onPress={ () => {
          let data = {
            "first_name" : first_name,
            "last_name" : last_name,
            "email" : email,
            "password" : password,
            "number" : phone,
            "blood_type" : blood_type,
            "dob" : date.toLocaleDateString(),
            "gender" : gender,
            "role_id" : 1,
        }

        axios({
          method: 'post',
          url: 'http://192.168.1.149:8000/api/register', 
          data: data,
          })
          .then(function (response) {
            alert(response.data.message)
            console.log(response)
            // navigation.push('HomePage')
          
          })
          .catch(function (error){
            console.log(error)
            // alert(error)
        })
      }}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
}