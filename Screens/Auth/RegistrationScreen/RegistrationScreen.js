import React, { useState } from "react";
// import { Form } from "../Form/Form";

import {
  StyleSheet, Text, View,
  TextInput, TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

const initialState = {
  login: '',
  email: '',
  password: ''
}

export const RegistrationScreen = (
) => {
  const [isKeyboard, setIsKeyboard] = useState(false)
  const [state, setState] = useState(initialState)
  console.log(keyboardHide)
  const keyboardHide = () => {
    setIsKeyboard(false);
    Keyboard.dismiss();
    setState(initialState)
  }


  return (
    <View style={styles.RegistrationForm}>
      <View style={{ ...styles.photo, top: isKeyboard ? 76 : 46 }}>
      </View>
      <Text style={styles.titleForm}>Registration</Text>
      <View style={{ marginBottom: isKeyboard ? 6 : 66 }}>
        <KeyboardAvoidingView
          behavior={null}>

          <View style={styles.inputPassword}>
            <TextInput
              style={styles.input}
              onFocus={() => setIsKeyboard(true)}
              value={state.login}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))}
              placeholder="Login"
            />
            <TextInput
              style={styles.input}
              onFocus={() => setIsKeyboard(true)}
              value={state.email}
              onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              onFocus={() => setIsKeyboard(true)}
              value={state.password}
              onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity activeOpacity={0.5}
          style={styles.btn} onPress={keyboardHide}>
          <Text style={styles.titleBtn}>Register</Text>
        </TouchableOpacity>
        <Text
          style={styles.textMessage}>Have you already an account? Enter</Text>

      </View>

      <View style={styles.indicator}></View>
    </View>
    // </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({

  titleForm: {
    textAlign: 'center',
    marginTop: 92,
    fontSize: 30,
    fontWeight: 500,
    fontFamily: 'Roboto-Regular',
    marginBottom: 33,
  },

  input: {
    height: 50,
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    color: '#212121',
  },
  RegistrationForm: {
    height: 550,
    justifyContent: 'flex-end',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
    paddingLeft: 16,
    paddingRight: 16,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginBottom: 16,
  },
  titleBtn: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
  },
  textMessage: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    color: '#1B4371',
  },
  indicator: {
    width: 134,
    height: 5,
    backgroundColor: '#212121',
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 7,
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,

    marginLeft: 'auto',
    marginRight: 'auto',

  }
});
