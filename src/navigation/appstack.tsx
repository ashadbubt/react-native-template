import React, {FC} from "react";
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,Dashboard} from '../screens'

const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
   return (
     <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Dashboard" component={Dashboard}/>
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