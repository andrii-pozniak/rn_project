import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/images/photo_bg.jpg")} style={styles.image}>
        <View style={styles.form}>
        <Text style={styles.text}>Registration</Text>
        <TextInput
          style={styles.input}
          placeholder="Login"
        // onChangeText={onChangeText}
        // value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
        // onChangeText={onChangeText}
        // value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
        // onChangeText={onChangeText}
        // value={text}
        />
        </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 33,    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  input: {
    height: 50,
    width: 343,
    marginBottom: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    fontWeight: 400,
  },
  form: {
    
    width: 375,
    height: 549,
    borderRadiusLeft: 8,
    borderRadiusRight: 8,
    backgroundColor: '#FFFFFF',
  }
});
