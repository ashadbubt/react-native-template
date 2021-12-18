import React from "react";
import {View, Text, StyleSheet, Dimensions } from 'react-native'
import { TextInput } from 'react-native-paper';
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
const {height, width} = Dimensions.get('screen');

interface Props {
    placeholder:string;
    onChangeText:(text:string)=>void;
    secureTextEntry?:boolean;
    rightIcon?:IconSource;

}

const Input:React.FC<Props> = (props) =>{
   return  (
     
           <TextInput           
            label="Outlined input"
            placeholder= {props.placeholder}
            secureTextEntry={props.secureTextEntry}
        />
       
   )
}

export default Input;

const style = StyleSheet.create({
    container:{
        width:width/1.1,
        alignSelf:'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 5

    },
    input:{
        padding:15
    } 
})
