import React ,{FC, useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./appstack";
import AuthStack from "./authstack";
import { db ,auth} from '../constants/firebase'

const MainNav:FC = () =>{
    const [user,setUser] = useState<any>(null);
    
    // const bootstrap = () => {
        
    //     auth.onAuthStateChanged(_user => {
    //         if(_user){
    //             setUser(_user)
    //         }
    //     })
    // }

    
    // useEffect(() => {
    //     bootstrap()
    //  }, [])

    useEffect(
        () => auth.onAuthStateChanged(_user => setUser(_user)), 
    //    ()=> console.log("Come To MainNavigator"),
    [])
    console.log("Come To MainNavigator")
    

    return (
        <NavigationContainer>
            {user!== null? <AppStack/>:<AuthStack/> }
        </NavigationContainer>

    )
}
export  default MainNav;