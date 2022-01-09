import React, { FC, useEffect, forwardRef, useImperativeHandle } from "react";
import { View, Text } from "react-native";
import { Title } from "react-native-paper";
interface Props {
    title:string,
    array:string[],
    getData:( type:string )=>void,
    ref: any
}
const Child:FC<Props> = forwardRef((props, ref)=>{


    useImperativeHandle(ref, () => ({

        getAlert() {
          alert("getAlert from Child");
        }
    
      }));

    useEffect(()=>{
        props.getData("tasks")
    },[props.getData])
    return (
        <View>
            <Text style={{ fontSize:20}} > Child Compnent {props.title} </Text>
        </View>
    )
})
export default React.memo(Child);