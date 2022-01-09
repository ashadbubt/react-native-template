import React,{useContext} from "react";
import { Text, View,StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import { AuthContext } from "../components/context";

const More:React.FC =()=> {
    const [state, authContext] = useContext(AuthContext)   
    return (
        <View style={style.container}>
            <Text>More  Screen</Text>
            <Button icon="logout" onPress={authContext.signOut}>
                LogOut
            </Button>
        </View>
    );
}
export default More;

const style= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
})