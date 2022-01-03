import React, { FC, useEffect, useState, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/appstack";
import AuthStack from "./src/navigation/authstack";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { AuthContext } from "./src/components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "./src/screens/SplashScreen";

import axios from "axios";
import { LOGIN_BASE_URL } from "./src/constants/constants";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
interface userLoginSuccesData {
  key: string;
  message: String;
  status: boolean;
}
const App: FC = () => {
  // const [userToken, setUserToken] = useState<any>(null);
  // const [isLoading, setIsLoading] = useState<Boolean>(true);
  const initialLoginState = {
    userName: null,
    isLoading: true,
    userToken: null,
    errorMessage: "",
  };
  const loginReducer = (prevState: any, action: any) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.token,
          userName: "ashad",
          isLoading: false,
          errorMessage: "",
        };
      case "LOGIN_FAILED":
        return {
          ...prevState,
          userToken: null,
          userName: "ashad",
          isLoading: false,
          errorMessage: action.errorMessage,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userToken: null,
          userName: "ashad",
          isLoading: false,
          errorMessage: "",
        };
      case "RETRIVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          errorMessage: "",
        };
      case "SET_VALUE":
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
          errorMessage: "SET VALUE",
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = useMemo(
    () => ({
      signIn: async (userLoginSuccesData: userLoginSuccesData) => {
        await AsyncStorage.setItem("userToken", userLoginSuccesData.key);
        dispatch({ type: "LOGIN", token: userLoginSuccesData.key });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log("ERROR");
        }
        dispatch({ type: "LOGOUT" });
      }
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log("ERROR");
      }
      dispatch({ type: "RETRIVE_TOKEN", token: userToken });
    }, 2000);
  }, []);

  if (loginState.isLoading) {
    return <SplashScreen></SplashScreen>;
  }
  return (
    <AuthContext.Provider value={[loginState,authContext]}>
      <SafeAreaProvider>
        <NavigationContainer>
          {loginState.userToken !== null ? <TabNavigator /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

export default App;
