import { Button, Text, TextInput, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import DatePicker from 'react-native-modern-datepicker';
import styles from './styles';

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text>SOS</Text>
      <Text>Sign Up</Text>
      <Text>First Name</Text>
      <TextInput placeholder='First Name'/>
      <Text>Last Name</Text>
      <TextInput placeholder='Last Name'/>
      <Text>Email</Text>
      <TextInput placeholder='Email'/>
      <Text>Password</Text>
      <TextInput placeholder='Password'/>
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
      <Button title="Sign Up" color="red"/>
    </View>
  );
}