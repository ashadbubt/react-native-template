import React, { FC, useEffect, useState, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/appstack";
import AuthStack from "./src/navigation/authstack";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { AuthContext } from "./src/components/context";
import  AsyncStorage  from "@react-native-async-storage/async-storage";

const App: FC = () => {
  // const [userToken, setUserToken] = useState<any>(null);
  // const [isLoading, setIsLoading] = useState<Boolean>(true);
  const initialLoginState = {
    userName: null,
    isLoading: true,
    userToken: null,
  };
  const loginReducer = (prevState:any, action:any) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.token,
          userName: "ashad",
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userToken: null,
          userName: "ashad",
          isLoading: false,
        };
      case "RETRIVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = useMemo(
    () => ({
      signIn: async(userName:string|null, password:string|null) => {
        try{
          await AsyncStorage.setItem('userToken',"Token")
        } catch (e){
          console.log("ERROR");
        }
        dispatch({type:'LOGIN',token:"token" });
      },
      signOut: async() => {
        try{
           await AsyncStorage.removeItem('userToken')
        } catch (e){
          console.log("ERROR");
        }
        dispatch({type:'LOGOUT' })
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e){
        console.log("ERROR");
      }
      dispatch({type:'RETRIVE_TOKEN',token:userToken })
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
