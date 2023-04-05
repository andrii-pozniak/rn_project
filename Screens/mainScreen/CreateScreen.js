import React, { useState, useRef, useEffect } from "react";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  Button,
} from "react-native";

const CreateScreen = ({navigation}) => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
   const getLocationPermission = async() => {
    const {status} = await Location.requestForegroundPermissionsAsync();
    if(status === 'granted'){
        console.log('Location permission granted')
    }else {
        console.log('Location permission not granted');
      }
   };
   getLocationPermission()
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const picture = await cameraRef.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      console.log('takePhoto')
    console.log('before getting location')
      const location = await Location.getLastKnownPositionAsync();
      console.log('after getting location')
      console.log('location')
    //   console.log('location', location.coords.latitude)
    //   console.log('location', location.coords.longitude)
      console.log('location', location)
      setCapturedImage(picture);
      console.log("first1", picture);
    }
    console.log("first", picture);
    // const photo = await takePi
  };

  const sendPhoto = () => {
    navigation.navigate('Post', {capturedImage})
  }

  return (
    <View style={styles.container}>
      {capturedImage && (
        <View style={styles.photoContainer}>
          <Image
            source={{ uri: capturedImage.uri }}
            style={styles.previewImage}
          />
        </View>
      )}
      <View borderRadius={20}>
      <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)}>
        <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
          <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          {/* <Text style={styles.text}>SNAP</Text> */}
        </TouchableOpacity>
      </Camera>
      </View >

      <View>
        <Text style={styles.text}>Edit photo</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="terrain" />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={sendPhoto}
        >
          <Text style={styles.titleBtn}>Publish</Text>
        </TouchableOpacity>
        <View style={styles.containerDelete}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnDelete}
          onPress={() => {}} >
          <AntDesign name="delete" size={24} color="#DADADA" />
        </TouchableOpacity>
        <View style={styles.indicator}></View> 
        </View>          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",

  },
  camera: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  cameraBtn: {
    height: 60,
    width: 60,
    marginHorizontal: 16,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
    marginTop: 8,
  },
  photoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  previewImage: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  input: {
    height: 50,
    marginBottom: 32,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingBottom: 16,
    color: "#e8e8e8",
  },
  inputContainer: {
    marginTop: 48,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    marginTop: 32,
  },
  titleBtn: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
    color: '#BDBDBD',
},
containerDelete: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 70,

    // marginTop: 120,
},
  indicator: {
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 22,
    marginBottom: 7,
  },
  btnDelete: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // paddingHorizontal: 28,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    marginTop: 32,
  },
});

export default CreateScreen;
