// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/images/photo_bg.jpg")} style={styles.image}>

        <View style={styles.form}>
          <View style={styles.photo}></View>
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
    marginLeft: 16,

    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,

  },
  form: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: 0,
    width: 375,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  photo: {
    borderColor: '#E8E8E8',
    borderWidth: 1,
    width: 120,
    height: 120,
    left: 128,
    top: -60,
    backgroundColor: `#F6F6F6`,
    borderRadius: 16,
    marginBottom: 32,
  }
});
