import React, {FC} from "react";
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,Settings, More} from '../screens'
import {Feather, AntDesign } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
   return (
     <Tab.Navigator screenOptions={{
         headerShown:false,  
         tabBarActiveTintColor: 'green',         
         tabBarInactiveTintColor: 'black',
         tabBarLabelStyle:{
         textAlign: 'center',         
         
         }
        }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
         tabBarLabel: 'Home',
         tabBarIcon: ({focused,  color }) => (
            <AntDesign name="home" size={24} color= {color} />
         ), 
       
       }}
        />
        <Tab.Screen name="Dashboard" component={Settings} options={{
           tabBarLabel:'settings',
           tabBarIcon:({focused,  color }) => (
            <Feather name="settings" size={24} color={color} />
           ),
           unmountOnBlur:true      
        }}/>
        <Tab.Screen name="More" component={More} options={{
           tabBarLabel: 'More',
           tabBarIcon:({focused,  color })=>(
            <Feather name="list" size={24} color={color} />           )
        }}/>
    </Tab.Navigator>
   );
}

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