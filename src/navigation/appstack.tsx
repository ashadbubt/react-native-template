import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Settings, More, TestForm } from "../screens";
import { Feather, AntDesign } from "@expo/vector-icons";
import { TextInput, Button } from "react-native-paper";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          textAlign: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Settings}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ focused, color }) => (
            <Feather name="camera" size={24} color={color} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestForm}
        options={{
          tabBarLabel: "Form",
          tabBarIcon: ({ focused, color }) => (
            <Feather name="airplay" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ focused, color }) => (
            <Feather name="list" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const {Navigator, Screen} = createStackNavigator();

//  const  AppStack : React.FC = () => {
//     return(
//         <Navigator screenOptions={{headerShown:false}}>
//             <Screen name="home" component={ Home }></Screen>
//             <Screen name="dashboard" component={Dashboard} ></Screen>
//         </Navigator>
//     )
//  }

export default TabNavigator;
