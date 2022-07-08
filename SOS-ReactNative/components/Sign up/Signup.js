import { Button, Text, TextInput, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import styles from './styles';

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text>SOS</Text>
      <Text>Sign Up</Text>
      <TextInput placeholder='First Name'/>
      <TextInput placeholder='Last Name'/>
      <TextInput placeholder='Email'/>
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