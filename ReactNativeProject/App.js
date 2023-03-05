import React from 'react';
import {
  StyleSheet, View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback

} from 'react-native';
// import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

const initialPerson = {
  login: '',
  email: '',
  password: ''
}

export default function App() {

  const addPerson = ({ login, email, password }) => {
    const NewRegistration = {
      login: login,
      email: email,
      password: password,
    }

    setPerson((prevState) => ({ ...prevState, addPerson }))
    // setLogin((prevState) => ({ ...prevState, addLogin }))

  }

  const keyboardHide = () => {
    setIsKeyboard(false);
    Keyboard.dismiss();
    setPerson(initialPerson)
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={require("./assets/images/photo_bg.jpg")} style={styles.image}>

          {/* <RegistrationScreen />          */}

          <LoginScreen />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "flex-end"
  },

});
