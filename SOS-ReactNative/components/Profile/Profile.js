import { Text, View, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import React from "react";
import styles from './styles';
import { Fontisto, Feather, MaterialIcons, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useUserInfo } from '../../hooks/UserProvider';
import axios from 'axios';

export default function Profile({navigation}) {
    const {user, Lougout} = useUserInfo();
    const [image, setImage] = React.useState(user.picture)
    //model related states
    const [modalName, setModalName] = React.useState(false);
    const [modalPhone, setModalPhone] = React.useState(false);
    const [modalContact, setModalContact] = React.useState(false);
    //variable related states
    const [fname, setFName] = React.useState(user.first_name)
    const [lname, setLName] = React.useState(user.last_name)
    const [phone, setPhone] = React.useState(user.number);
    const [preferredContact, setPreferredContact] = React.useState(user.preffered_contact)
    //temp variable related states
    const [tempf, setTempf] = React.useState(user.first_name);
    const [templ, setTempl] = React.useState(user.last_name);
    const [tempPhone, setTempPhone] = React.useState(user.number);
    const [tempPreferredContact, setTempPreferredContact] = React.useState(user.preffered_contact)
    
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
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

    // React.useEffect(() => {
    //     update({"id": user.id, "picture": image})
    // }, [image]);
    
    return (
    <ScrollView style={styles.container}>
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                {image?<Image style={styles.img} source={{ uri: "data:image/png;base64," + image }} />:<Image style={styles.img} source={require('../../assets/persona.png')} />}
                <View style={styles.uploadBtnContainer}>
                    <TouchableOpacity style={styles.uploadBtn} onPress={() => {
                        console.log(image)
                        pickImage()
                        setTimeout(() => {update({"id": user.id, "picture": image})},1000)}}>
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
                <Text style={styles.info}>{user.gender}</Text>
            </View>     
        </View>

        <View style={styles.box}>
            <Fontisto name="blood-drop" size={24} color="gray" />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Blood Type</Text>
                <Text style={styles.info}>{user.blood_type}</Text>
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
                                update({"id": user.id, "preffered_contact": preferredContact})
                                setModalContact(!modalContact)
                            }}
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