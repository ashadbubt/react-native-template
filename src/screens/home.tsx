import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { AuthContext } from "../components/context";
// import {db, auth} from "../constants/firebase"

const Home: React.FC = (props) => {
  const [state, authContext] = useContext(AuthContext)    
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
