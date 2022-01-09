import React, {FC} from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {AuthStackParamList} from  "../navigation/authstack";
import { Button } from "react-native-paper";
import { AuthContext } from "../components/context";


type Props = NativeStackScreenProps<AuthStackParamList,'login'>;

const ForgetPassword:FC<Props>  = (props) => {    

    return (
        <SafeAreaProvider>
        <View style={style.container}>
            <Text>Foreget Password</Text>

            <Text>Foreget Password</Text>

            <Text>Foreget Password</Text>

            <Text>Foreget Password</Text>
            <Text>Foreget Password</Text>            
            
          

        </View>       
        
        </SafeAreaProvider>
    );
}
export default ForgetPassword;
const style = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'yellow',
    marginTop:25  }
});