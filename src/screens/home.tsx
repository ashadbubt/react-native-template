import React from "react";
import {View, Text, StyleSheet } from 'react-native'
import { Button } from "react-native-paper";
import {db, auth} from "../constants/firebase"

const Home:React.FC = (props) =>{
    const signOut = async ()=>{         
        await auth.signOut();
        // props.navigation.navigate("signUp");
        // props.navigation.navigate("dashboard")

    }
   return  (
        <View style={style.container}>
            <Text>Home Screen</Text>
            <Button icon="logout" onPress={ signOut }>
                LogOut
            </Button>
        </View>   
   )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Home;