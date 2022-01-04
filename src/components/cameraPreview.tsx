import React, { FC } from "react";
import {View, ImageBackground} from  "react-native";
import { IconButton, Colors } from 'react-native-paper';

interface Props {
    photo:any
    retackPicture:() =>void,
    savePicture:() => void
}
const CameraPreview:FC <Props>=(Props)=>{
    return (
        <View
              key={0}
              style={{
                backgroundColor: "transparent",
                flex: 1,
                width: "100%",
                height: "100%",
              }}
            >
            <ImageBackground
                source={{ uri: Props.photo && Props.photo.uri }}
                style={{
                  flex: 1,
                }}
            >
                 <View style={{ flex:1,flexDirection:"row", justifyContent:"space-between" , alignItems:"flex-end", backgroundColor:'transparent'}}>
                    <IconButton
                        icon="close-outline"     
                        style={{ alignSelf: "flex-end" , }}               
                        color={Colors.white}                        
                        size={30}
                        onPress={() => Props.retackPicture()}
                    />
                    <IconButton
                        icon="file-plus"                    
                        color={Colors.white}
                        style={{ alignSelf: "flex-end" }}               
                        size={30}
                        onPress={() => Props.savePicture() }
                    />
                 </View>
                
            </ImageBackground>
           
        </View>
    );
}

export default CameraPreview;