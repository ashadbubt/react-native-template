import React from "react";


import {createStackNavigator, Header} from '@react-navigation/stack'
import {SignUp,Login} from '../screens'


const {Navigator, Screen} = createStackNavigator();

 const  AuthStack : React.FC = () => {
    return(
        <Navigator screenOptions={{ headerShown: false }}>            
            <Screen name="login" component={Login} ></Screen>            
        </Navigator>
    )
 }

 export default AuthStack;