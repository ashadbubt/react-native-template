import React, { FC, useEffect, useState } from "react";
import { AppRegistry, StyleSheet, Text } from "react-native";
import { View } from "react-native-animatable";
import { TextInput, Button } from "react-native-paper";
import { Input } from "../components";
const testForm: FC = () => {
  const [text, setText] = useState("Hello");
  let initialState = ()=>({
    UserName: "",
    phoneNUmber: "",
    Email: "",
  });
  let [state1, setState1] = useState(initialState());

  let [showOtherComponent,setShowOtherComponent] = useState(false);
  let [showOtherComponentData,setOtherComponentData] = useState(false);

  const handleChange = () => {
    // console.log(state);
     console.log(state1);
   // setState1({...state1, UserName:"zamal"});
    // Api();
  };
//   const Api =()=>{
//       console.log(state1);
//   }
  const clearState = async () => {
   setState1(initialState());
   setTimeout(()=>{
    printstate();
   },3000)
    
  };

const printstate =()=>{
    console.log(state1);
}

const getData =(text:any)=>{
    // setState1({...state1,UserName:userName })
    setOtherComponentData(text);
    console.log(text);
    console.log("Hello");
}
//   useEffect(() => {
//     // console.log(state);
//     Api();
//   }, [state1.UserName]);

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <TextInput
        style={style.inputTest}
        label="UserName"
        value={state1.UserName}
        onChangeText={(text) => setState1({ ...state1, UserName: text })}
      />
      <TextInput
        style={style.inputTest}
        label="Email"
        value={state1.Email}
        onChangeText={(text) => setState1({ ...state1, Email: text })}
      />
      <TextInput
        style={style.inputTest}
        label="phoneNUmber"
        value={state1.phoneNUmber}
        onChangeText={(text) => setState1({ ...state1, phoneNUmber: text })}
      />
      <Button
        style={style.inputTest}
        icon="camera"
        mode="contained"
        onPress={() => handleChange()}
      >
        Press me
      </Button>
        <Button
            style={style.inputTest}
            icon="camera"
            mode="contained"
            onPress={() => clearState()}
        >            
        Clear
      </Button>

      <Button
            style={style.inputTest}
            icon="camera"
            mode="contained"
            onPress={() => setShowOtherComponent(true)}
        >            
        Show Other Component
      </Button>
      {showOtherComponent ?
      <Input placeholder="Show Input" data={state1.UserName} getData={getData}/>
       : null}

        <Text style={style.inputTest}>Data From Child: {showOtherComponentData}</Text>

    </View>
  );
};

export default testForm;

const style = StyleSheet.create({
  inputTest: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 5,
  },
});
