import React from 'react';
import { Form } from "../Form/Form";
import {
    StyleSheet, View,
   
} from 'react-native';

export const LoginScreen = () => {
    return (
        <View style={styles.LoginScreenForm}>       
        <Text style={styles.titleForm}>Enter</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Form/>          
        </KeyboardAvoidingView>
        <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
          <Text style={styles.titleBtn}>Enter</Text>
        </TouchableOpacity>
        <Text style={styles.textMessage}>Don't have an account? Register</Text>
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
   
    LoginScreenForm: {
      position: 'absolute',      
      width: '100%',
      height: 490,
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
   
  });