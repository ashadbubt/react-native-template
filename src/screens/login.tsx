import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { TextInput, Button } from "react-native-paper";
// import { auth } from "../constants/firebase";
import { AuthContext } from "../components/context";

const SignUp: React.FC = (props) => {
  const [password, setPassword] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const { signIn } = React.useContext(AuthContext);

  const loginHandle = (userName:String|null , password:String|null) => {
      signIn(userName, password);
  };
  const login = async () => {
    // if(email && password){
    //     const {user} = await auth.signInWithEmailAndPassword(email, password);
    // } else {
    //     Alert.alert(`Missing Fields`);
    // }
  };

  return (
    <View style={style.container}>
      <View style={{ alignItems: "center", alignContent: "center" }}>
        <Text> Login Screen</Text>
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
          onPress={()=>{ loginHandle(email, password) } }
        >
          Login
        </Button>
        <Text> Forget Password</Text>
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
