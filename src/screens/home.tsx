import React, { useContext, useState , useMemo, useEffect, useCallback} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Colors } from "react-native-paper";
import { AuthContext } from "../components/context";
import { Child } from "../components";
// import {db, auth} from "../constants/firebase"

const Home: React.FC = (props) => {
  const [state, authContext] = useContext(AuthContext)    
  const [count, setCount] = useState(0)
  const [dark, setBackground] = useState(true)
  
  const doubleNumber = useMemo(()=>{
    slowFunction(count.toString());
  },[count])

  const array = useMemo(()=>{
   return ['One','Two','Three'];
  },[]);
  
  const fetchData = useCallback((type:string) =>{
    console.log(`Come To Fetch Data ${type}`);
   },[])

  useEffect(()=>{
    fetchData("users");
  },[fetchData])  

  return (
    <View style={[style.container,dark? {backgroundColor:'gray'}:{backgroundColor:'white'}]}>
       
        <Text style= {{fontSize:20}} > useEfect,useMemo,useCallback,useState Example  </Text>        
        <Text>------------------------------------------------------</Text>
        <Text style= {{marginTop:20,paddingLeft:15,fontSize:20}}>Count: {count}</Text> 
        <Button
          style={style.inputTest}
          icon="plus"
          mode="contained"
          onPress={() => setCount(count+1)}
        >
          Add
        </Button>

        <Button
          style={style.inputTest}
          icon=""
          mode="contained"
          onPress={() => setBackground(!dark)}
        >
          Change background
        </Button>

        <Child title="Hello Child " array={array} getData={fetchData}/>
    </View>
  );
};

const  slowFunction = (num:string) =>{
  console.log(" come slowFunction ");
  for(let i=0; i<= 100000000; i++){}
  return Number(num) * 2;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputTest: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 5,
  },
});
export default Home;
