import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Import Screens
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Favorites from "../Favorites/Favorites";

const Tab = createBottomTabNavigator();

const LoggedIn = () => {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Favorites") {
              iconName = "heart";
            } else if (route.name === "Profile") {
              iconName = "person";
            }
            return <Ionicons size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default LoggedIn;
