import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SavedScreen from "./Screens/SavedScreen";
import BookingScreen from "./Screens/BookingScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./Screens/SearchScreen";
import PlacesScreen from "./Screens/PlacesScreen";
import MapScreen from "./Screens/MapScreen";


const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#003580" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#003580" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
               <Ionicons name="notifications" size={24} color="#003580" />
              ) : (
                <Ionicons name="notifications-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#003580" />
                ) : (
                  <Ionicons name="person-outline" size={24} color="black" />
                  ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
      <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
      <Stack.Screen name="Places" component={PlacesScreen} />
      <Stack.Screen name="Map" component={MapScreen} options={{headerShown:false}} />
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
