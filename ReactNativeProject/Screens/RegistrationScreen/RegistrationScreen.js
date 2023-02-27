import React from "react";
import { Form } from "../Form/Form";

import { StyleSheet, Text, View,
     TextInput, TouchableOpacity,
    KeyboardAvoidingView,
    Platform, } from "react-native";

export const RegistrationScreen = props => {
  // const [isKeyboard, setIsKeyboard] = useState(false)
    return (
        <View style={styles.RegistrationForm}>
          <View style={styles.photo}>
          </View>
          <Text style={styles.titleForm}>Registration</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Form/>
            <View style={styles.inputPassword}>
              <TextInput
                style={styles.input}
                // onFocus={() => setIsKeyboard(true)}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
            <Text style={styles.titleBtn}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.textMessage}>Have you already an account? Enter</Text>
          <View style={styles.indicator}></View>
        </View>
    )
}

const styles = StyleSheet.create({   
    
    titleForm: {
      textAlign: 'center',
      marginTop: 92,
      fontSize: 30,
      fontWeight: 500,
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
      position: 'absolute',
      
      width: '100%',
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
      color: '#FFFFFF',
    },
    textMessage: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 19,
      textAlign: 'center',
      color: '#1B4371',
      marginBottom: 66,
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
      top:60,
      marginLeft: 'auto',
      marginRight: 'auto',

    }
  });
  