import { Text, View, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import React from "react";
import styles from './styles';
import { Fontisto, Feather, MaterialIcons, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useUserInfo } from '../../hooks/UserProvider';
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

export default function Profile({navigation}) {
    const [image, setImage] = React.useState("")
    const {user, Lougout} = useUserInfo();
    //model related states
    const [modalName, setModalName] = React.useState(false);
    const [modalGender, setModalGender] = React.useState(false);
    const [modalBlood, setModalBlood] = React.useState(false);
    const [modalPhone, setModalPhone] = React.useState(false);
    const [modalContact, setModalContact] = React.useState(false);
    //variable related states
    const [fname, setFName] = React.useState("")
    const [lname, setLName] = React.useState("")
    const [blood, setBlood] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [preferredContact, setPreferredContact] = React.useState("")
    //temp variable related states
    const [tempf, setTempf] = React.useState(user.first_name);
    const [templ, setTempl] = React.useState(user.last_name);
    const [tempPhone, setTempPhone] = React.useState(user.number);
    const [tempPreferredContact, setTempPreferredContact] = React.useState(user.preffered_contact)
    //date relates states
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate)
    };
  
    const showMode = () => {
      setShow(true);
      setMode('date');
    };
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [3, 3],
          quality: 1,
          base64: true, //converting image to base64
        });
    
        if (!result.cancelled) {
          setImage(result.base64);
        }
    }

    const update = (data) => {
        axios({
            method: 'post',
            url: 'http://192.168.1.149:8000/api/editprofile', 
            data: data,
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error){
                console.log(error)
                alert(error)
        })
    }

    const getInfo = () => {
        let data = {
            "id" : user.id
        }
        axios({
            method: 'post',
            url: 'http://192.168.1.149:8000/api/userinfo',
            data: data
            })
            .then(function (response) {
                setFName(response.data.user.first_name)
                setLName(response.data.user.last_name)
                setBlood(response.data.user.blood_type)
                setGender(response.data.user.gender)
                setPhone(response.data.user.number)
            })
            .catch(function (error){
                console.log(error)
                alert(error)
        })
        
    }

    React.useEffect(() => {
        if(user.picture == null){
            setImage('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')
        }else{
            setImage(user.picture)
        }
        getInfo()
    }, []);
    
    return (
    <ScrollView style={styles.container}>
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <Image style={styles.img} source={{ uri: 'data:image/png;base64,' + image }} />
                <View style={styles.uploadBtnContainer}>
                    <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
                        <Text>Change Image</Text>
                        <AntDesign name="camera" size={20} color="black" />
                    </TouchableOpacity>
                </View>  
            </View>
            <TouchableOpacity style={styles.nameContainer} onPress={() => setModalName(true)}>
                <Text style={styles.name}>{fname} {lname}</Text>
            </TouchableOpacity>
            
        </View>

        <View style={styles.box}>
            <MaterialCommunityIcons name="gender-male-female" size={24} color="gray" />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Gender</Text>
                <Text style={styles.info}>{gender}</Text>
            </View>     
        </View>

        <View style={styles.box}>
            <Fontisto name="blood-drop" size={24} color="gray" />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Blood Type</Text>
                <Text style={styles.info}>{blood}</Text>
            </View> 
        </View>

        <View style={styles.box}>
            <Feather name="calendar" size={24} color="gray" />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Date of Birth</Text>
                <Text style={styles.info}>{user.dob}</Text>
            </View>
        </View>

        <View style={styles.box}>
            <FontAwesome name="phone" size={24} color="gray" />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Phone</Text>
                <Text style={styles.info}>{phone}</Text>
            </View>
            <TouchableOpacity onPress={() => setModalPhone(true)}>
                <MaterialIcons name="edit" size={24} color="gray" />
            </TouchableOpacity>
            
        </View>

        <View style={styles.box}>
            <MaterialIcons name="contacts" size={24} color="gray" />
            <View style={styles.margin}>
                <Text style={styles.title}>Preferred Contact</Text>
                {!preferredContact?<Text style={styles.info1}>No Preferred Contact Yet</Text>:<Text style={styles.info}>{preferredContact}</Text>}
            </View>
            <TouchableOpacity onPress={() => setModalContact(true)}>
                <MaterialIcons name="edit" size={24} color="gray" />
            </TouchableOpacity>
            
        </View>
        
        <TouchableOpacity style={styles.button}
        onPress={() => {
            Lougout({navigation})
        }}          
            >
            <Text style={styles.btnText}>Log Out</Text>
        </TouchableOpacity>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalName}
        onRequestClose={() => {
          setModalName(!modalName);
        }}>
            <View style={styles.centereddView}>
                <View style={styles.modalView}>
                    <TextInput value={fname} placeholder="First Name" onChangeText={setFName}/>
                    <TextInput value={lname} placeholder="Last Name" onChangeText={setLName}/>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.cancel}
                            onPress={() => {
                                setFName(tempf)
                                setLName(templ)
                                setModalName(!modalName)}}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.save}
                            onPress={() => {
                                setTempf(fname)
                                setTempl(lname)
                                update({"id": user.id, "first_name": fname})
                                update({"id": user.id, "last_name": lname})
                                setModalName(!modalName)}}
                        >
                            <Text style={styles.textStyle}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </Modal>
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalPhone}
        onRequestClose={() => {
          setModalPhone(!modalPhone);
        }}>
            <View style={styles.centereddView}>
                <View style={styles.modalView}>
                    <TextInput value={phone} placeholder="Phone Number" onChangeText={setPhone}/>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.cancel}
                            onPress={() => {
                                setPhone(tempPhone)
                                setModalPhone(!modalPhone)}}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.save}
                            onPress={() => {
                                setTempPhone(phone)
                                update({"id": user.id, "number": phone})
                                setModalPhone(!modalPhone)}}
                        >
                            <Text style={styles.textStyle}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </Modal>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalContact}
        onRequestClose={() => {
          setModalContact(!modalContact);
        }}>
            <View style={styles.centereddView}>
                <View style={styles.modalView}>
                    <TextInput value={preferredContact} placeholder="Prefered Contact Number" onChangeText={setPreferredContact}/>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.cancel}
                            onPress={() => {
                                setPreferredContact(tempPreferredContact)
                                setModalContact(!modalContact)}}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.save}
                            onPress={() => {
                                setTempPreferredContact(preferredContact)
                                setModalContact(!modalContact)}}
                        >
                            <Text style={styles.textStyle}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </Modal>

    </ScrollView>
    );
  }