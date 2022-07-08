import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import DatePicker from 'react-native-modern-datepicker';
import styles from './styles';

export default function Signup() {
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
        <TextInput placeholder='Password' style={styles.input}/>
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