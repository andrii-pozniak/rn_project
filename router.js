import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RegistrationScreen } from "./Screens/Auth/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/Auth/LoginScreen/LoginScreen";
import CreateScreen from "./Screens/mainScreen/CreateScreen";
import PostScreen from "./Screens/mainScreen/PostScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
import CommentsScreen from "./Screens/mainScreen/CommentsScreen";
import MapScreen from "./Screens/mainScreen/MapScreen";
import Home from "./Screens/mainScreen/Home";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator screenOptions={{showLabel: true}}>
      <MainTab.Screen options={{ headerShown: false, tabBarIcon:({focused, size, color }) => 
        <MaterialCommunityIcons name="post" size={size} color={color} />
      }} name="Post" component={PostScreen} />
      <MainTab.Screen options={{headerShown: false, tabBarIcon:({focused, size, color }) => 
        <MaterialIcons name="create" size={size} color={color}/>
    }} name="Create" component={CreateScreen} />
      <MainTab.Screen options={{headerShown: false, tabBarIcon:({focused, size, color }) => 
        <AntDesign name="profile" size={size} color={color} />
      }} name="Profile" component={ProfileScreen} />
      <MainTab.Screen options={{headerShown: false, tabBarIcon:({focused, size, color }) => 
        <FontAwesome name="comments" size={size} color={color} />
      }} name="Comments" component={CommentsScreen} />
      <MainTab.Screen options={{headerShown: false, tabBarIcon:({focused, size, color }) => 
        <FontAwesome name="map" size={size} color={color} />
      }} name="Map" component={MapScreen} />
      <MainTab.Screen options={{headerShown: false, tabBarIcon:({focused, size, color }) => 
        <FontAwesome name="home" size={size} color={color} />
      }} name="Home" component={Home} />
    </MainTab.Navigator>
  );
};

export default useRoute;
