import React, { useState, useRef, useEffect } from "react";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';

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
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      const location = await Location.getCurrentPositionAsync({});

      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      console.log('location', location)
      console.log('before getting location')
      setLocation(coords);
    })();
  }, []);
// console.log('first', coords)
  const takePhoto = async () => {
    if (cameraRef) {
      
      const picture = await cameraRef.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      console.log('takePhoto')
   
      
      setCapturedImage(picture);
      console.log("first1", picture);
    }
    
  };
 

  const sendPhoto = () => {
    navigation.navigate('Post', {capturedImage})
  }
  const sendLocation = () => {
    navigation.navigate('Map', {location})
  }
  const getLocationAndTakePhoto = () => {
    sendPhoto();
    // sendLocation();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
      <Text style={styles.title}>Create post</Text>

      </View>
      <View style={styles.containerForm}>

      <View borderRadius={20}>
      
      <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
          <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          {/* <Text style={styles.text}>SNAP</Text> */}
        </TouchableOpacity>
      <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)}>
      {capturedImage && (
        <View style={styles.photoContainer}>
          <Image
            source={{ uri: capturedImage.uri }}
            style={styles.previewImage}
          />
        </View>
      )}
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
          onPress={getLocationAndTakePhoto}
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
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 60,
    // paddingLeft: 16,
    // paddingRight: 16,
    backgroundColor: "#fffff",

  },
  containerForm: {
    marginTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  containerTitle: {
    // display: "flex",
    height: 88,
  // width: '100%',
  shadowColor: "#000",
  justifyContent: 'center',
  alignItems: 'center',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.3,
  shadowRadius: 1,
  elevation: 2,
  paddingBottom:11,
  borderColor: "#ffffff",
    borderBottomWidth: 1,
  },
  title: {
    // flex: 1,
    marginTop: 50,
    fontWeight: 500,
    fontSize: 17,
    // lineHeight: 1.25,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  camera: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  cameraBtn: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [
      { translateX: -50 },
      { translateY: -50 },
    ],
    height: 60,
    width: 60,
    marginHorizontal: 16,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  text: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
    marginTop: 8,
  },
  photoContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    borderColor: "#ffffff",
    borderBottomWidth: 1,
    // zIndex: 100,
  },
  previewImage: {
    // flex: 1,
    // marginTop: 50,
    
    width: 390,
    height: "100%",
    borderRadius: 8,
    zIndex: 100,

    // resizeMode: "contain",
   
  },
  input: {
    height: 50,
    marginBottom: 32,
    // backgroundColor: "rgba(255, 255, 255, 0.3)",
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
