import React, { FC, useEffect } from "react";
import { View, Text } from "react-native";
import { Title } from "react-native-paper";
interface Props {
    title:string,
    array:string[],
    getData:( type:string )=>void
}
const Child:FC<Props> =(props)=>{


    console.log("Child Render");

    useEffect(()=>{
        props.getData("tasks")
    },[props.getData])
    return (
        <View>
            <Text style={{ fontSize:20}} > Child Compnent {props.title} </Text>
        </View>
    )
}
export default React.memo(Child);