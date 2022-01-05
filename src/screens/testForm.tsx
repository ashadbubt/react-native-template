import React, { FC, useEffect, useMemo, useState } from "react";
import { AppRegistry, StyleSheet, Text, ScrollView } from "react-native";
import { View } from "react-native-animatable";
import { TextInput, Button } from "react-native-paper";
import { Input } from "../components";
const testForm: FC = () => {


  let initialState = () => ({
    UserName: "",
    phoneNUmber: "",
    Email: "",
  });
  let [state1, setState1] = useState(initialState());

  let [showOtherComponent, setShowOtherComponent] = useState(false);
  let [showOtherComponentData, setOtherComponentData] = useState(false);

  const handleChange = () => {
    console.log(state1);
  };
  const clearState = async () => {
    setState1(initialState());
    setTimeout(() => {
      printstate();
    }, 3000);
  };

  const printstate = () => {
    console.log(state1);
  };

  const getData = (text: any) => {
    // setState1({...state1,UserName:userName })
    setOtherComponentData(text);
    console.log(text);
    console.log("Hello");
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 20 }}>
        <Text style= {{marginTop:20,paddingLeft:15,fontSize:25}} > Form Data Send and Receive </Text>
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
          Show Child Component
        </Button>
        {showOtherComponent ? (
          <Input
            placeholder="Show Input"
            data={state1.UserName}
            getData={getData}
          />
        ) : null}

        <Text style={style.inputTest}>
          Data From Child: {showOtherComponentData}
        </Text>
      </View>
    </ScrollView>
  );
};

const slowFunction = (num: string) => {
  console.log("Calling Slow function");
  for (let i = 0; i <= 100000000; i++) {}
  return Number(num) * 2;
};

export default testForm;

const style = StyleSheet.create({
  inputTest: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 5,
  },
});
