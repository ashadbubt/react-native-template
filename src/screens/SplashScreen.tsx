import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const SplashScreen: FC = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image
        source={require('../../assets/logo.png')}
        />
      </View>
      <View style={style.footer}>
        <ActivityIndicator color="black" size="large" />
      </View>
    </View>
  );
};
export default SplashScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor:'yellow',
  },
  header: {
    flex: 2,
    
    justifyContent:'center',
    alignItems:"center"
  },
  footer: {
    flex: 1,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:30,
    justifyContent:'center',
    alignItems:'center'
  },
});
