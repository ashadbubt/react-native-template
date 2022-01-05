import React, { useState } from "react";
import {View, Text, StyleSheet, Dimensions } from 'react-native'
import { TextInput } from 'react-native-paper';
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
const {height, width} = Dimensions.get('screen');

interface Props {
    data:string
    placeholder:string;
    onChangeText?:(text:string)=>void;
    secureTextEntry?:boolean;
    rightIcon?:IconSource;
    getData:(text?:any)=>void

}

const Input:React.FC<Props> = (props) =>{
    // console.log("Child render")
   return  (
     <View>
           <TextInput        
           style={style.inputTest}   
            label="Outlined input"
            placeholder= {props.placeholder}
            secureTextEntry={props.secureTextEntry}
            onChangeText={(text)=>{ props.getData(text) } }
        />
        <Text style={style.inputTest}>Data From Parent: {props.data}</Text>
    </View>
       
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
    } ,
    inputTest: {
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 5,
      },
})


