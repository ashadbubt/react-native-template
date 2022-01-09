import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { db ,auth} from "../constants/firebase";

const SignUp: React.FC = (props) => {
  
  const [password, setPassword] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const signup = async () => {
    
    if (name && email && password) {
     // console.log("Come");
        //  try{
        //   const user = await auth.createUserWithEmailAndPassword(email,password );
        //   if(user){
        //        db.collection('users').doc(user.uid).set({name, email, password})
        //        // Alert.alert(JSON.stringify(user));
        //   }
        //  }catch(error){
        //        console.log(error)
        //   }     
    } else {
      Alert.alert(`Error`, `Missing Fields`);
    }
  };

  return (
    <View style={style.container}>
      <View style={{ alignItems: "center", alignContent: "center" }}>
        <Text> Sign UP Screen</Text>
      </View>

      <View style={style.inputTest}>
        <TextInput label="User Name" onChangeText={(text) => setName(text)} />
      </View>
      <View style={style.inputTest}>
        <TextInput label="Email" onChangeText={(text) => setEmail(text)} />
      </View>
      <View style={style.inputTest}>
        <TextInput
          label="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{ marginRight: 5 }}
          icon="login"
          mode="contained"
          onPress={() => signup()}
        >
          Sign up
        </Button>
        <Button
          icon="login"
          mode="contained"
          onPress={() => props.navigation.navigate("login")}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inputTest: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 5,
  },
});
export default SignUp;
