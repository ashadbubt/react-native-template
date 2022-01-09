import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert, Touchable } from "react-native";
import {
  TextInput,
  Button,
  HelperText,
  Title,
  Checkbox,
} from "react-native-paper";
// import { auth } from "../constants/firebase";
import { AuthContext } from "../components/context";
import axios from "axios";

import { LOGIN_BASE_URL } from "../constants/constants";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {AuthStackParamList} from  "../navigation/authstack";
type Props = NativeStackScreenProps<AuthStackParamList,'login'>;

const SignUp: React.FC<Props> = ({ navigation }: Props) => {

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isBackendValidationError, sedBackendValidationError] =
    useState<boolean>(false);
  const  [state, authContext] =  React.useContext(AuthContext);

  
  // const navigation = useNavigation();

  const loginHandle = async (userName: string, password: string) => {
    const bodyFormData = new FormData();
    bodyFormData.append("username", userName);
    bodyFormData.append("password", password);
    let response = await axios.post(
      `${LOGIN_BASE_URL}/login/set_jwt_data`,
      bodyFormData
    );
    if (response.status != 200) {
      // Alert.alert("Unable to connect server");
      sedBackendValidationError(true);      
    } else {
      if (response.data.status != true) {
        // Alert.alert(response.data.message);
        sedBackendValidationError(true);
      } else {
        sedBackendValidationError(false);
        authContext.signIn(response.data);
      }
    }
    // signIn(userName, password);
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={style.headerTitle}>
        <Title>Login to Your Account </Title>
      </View>
      <View style={style.footer}>
        <TextInput
          style={style.inputTest}
          label="Email"
          onChangeText={(text) => {
            setEmail(text);
            sedBackendValidationError(false);
          }}
          right={<TextInput.Icon name="email" color="black" />}
        />

        <TextInput
          style={style.inputTest}
          onChangeText={(text) => {
            setPassword(text);
            sedBackendValidationError(false);
          }}
          label="Password"
          secureTextEntry


          right={<TextInput.Icon name="eye" />}
        />
        <View style={style.forgetAndrememberVIew}>
          <Checkbox
            status={rememberMe ? "checked" : "unchecked"}
            onPress={() => {
              setRememberMe(!rememberMe);
            }}
            color="black"
          />
          <TouchableOpacity onPress={()=>{  navigation.navigate('forgetPassword',{userId:"10"}) }}>
              <Text style={{ marginTop:5 }}  >Forget Passwor</Text>
          </TouchableOpacity>
        </View>

        <Button
          style={style.inputTest}
          onPress={() => loginHandle(email, password)}
          mode="contained"
          color="black"
        >
          Login
        </Button>
        {isBackendValidationError ? (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <HelperText style={style.inputTest} type="error">
              Email and password is invalid!
            </HelperText>
          </Animatable.View>
        ) : null}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,

    // backgroundColor:'black'
  },
  inputTest: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 5,
  },
  headerTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  forgetAndrememberVIew: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
});
export default SignUp;
