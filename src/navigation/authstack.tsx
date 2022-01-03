import React from "react";


import {createStackNavigator, Header} from '@react-navigation/stack'
import {ForgetPassword,Login} from '../screens'

export type AuthStackParamList = {
    login: undefined;
    forgetPassword: { userId: string };
  };

const {Navigator, Screen} = createStackNavigator<AuthStackParamList>();

 const  AuthStack : React.FC = () => {
    return(
        <Navigator screenOptions={{ headerShown: true,headerTransparent: true,headerTitle: "" }}>            
            <Screen name="login" component={Login} ></Screen>   
            <Screen name="forgetPassword" component={ForgetPassword}></Screen>             
        </Navigator>
    )
 }

 export default AuthStack;