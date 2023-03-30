import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback

} from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistrationScreen } from "./Screens/Auth/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/Auth/LoginScreen/LoginScreen";

const AuthStack = createNativeStackNavigator();

let customFonts = {
  'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),

};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  
  
  useEffect(() => {
    (async () => await Font.loadAsync(customFonts))();
    setFontsLoaded(true)
  }, [])

  if (!fontsLoaded) {
    return null;
  }

  return (
   <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={LoginScreen}/>
      <AuthStack.Screen name='Register' component={RegistrationScreen}/>
    </AuthStack.Navigator>
   </NavigationContainer>
  );
}

