import React, { useState, useEffect } from "react";
// import './ReactotronConfig'
import useRoute from "./router";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";


// let customFonts = {
//   "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
//   "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
// };

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const routing = useRoute(true)

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}
