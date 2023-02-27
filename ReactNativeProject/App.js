import React from 'react';
import {
  StyleSheet, View,
  ImageBackground, 
} from 'react-native';
// import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

export default function App() {
  // const [isKeyboard, setIsKeyboard] = useState(false)
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/images/photo_bg.jpg")} style={styles.image}>
        {/* <RegistrationScreen/>   */}
        <LoginScreen/>      
      </ImageBackground>
    </View>
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
