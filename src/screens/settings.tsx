import React, { useState, FC, useEffect, useRef } from "react";
import { StyleSheet, Text, Alert, View, TouchableOpacity , ImageBackground, Image} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { Camera } from "expo-camera";
import { CameraPreview } from "../components";
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import { LOGIN_BASE_URL } from "../constants/constants";


const Settings: FC = () => {
  const [startCamera, setStartCamera] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [captureImage, setCapturedImage] = useState<any>(null);
  const [image, setImage] = useState<ImagePicker.ImageInfo |null> (null);

  // const cam = useRef<Camera | null>();
  const ref = useRef<Camera>(null);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
      setHasPermission(status === "granted");
    } else {
      Alert.alert("Access denied");
    }
  };


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };

  const uploadImage = async () =>{
    // console.log(image);
    if(image!== null){
      let localUri = image.uri;
  
      let filename =  localUri?.split('/').pop();
    
      let match = /\.(\w+)$/.exec(filename!);
      let type = match ? `image/${match[1]}` : `image`;
    
      let formData = new FormData();
      formData.append('photo',JSON.parse(JSON.stringify({ uri: localUri,  name:filename, type })));
      // formData.append('photo', { uri: localUri, name: filename, type });

      let response = await axios.post(
        `${LOGIN_BASE_URL}Login/uploadFile`,
        formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      // console.log(response.data);
      if( response.status == 200 ) {
        if(response.data.status == true){
          setImage(null);
          console.log("File Upload successfull ");
        } else {
          console.log(response.data);
        }
      } else {
        console.log("File Not Found");
      }

    //setImage(null);
    } else {
        console.log("File Not Found");
    }
  }
  const __savePicture = async ()=>{
    // const {status} = await  Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    
    const { status }  = await  MediaLibrary.requestPermissionsAsync();
    if(status === "granted"){
        const assert = await MediaLibrary.createAssetAsync(captureImage.uri);
        await MediaLibrary.createAlbumAsync('MaxApp',assert,false);
        Alert.alert("Your image saved ");
        setCapturedImage(null);
        setPreviewVisible(false);
        __startCamera();

    } else {
      console.log(status);
      console.log("Oh you missed to give permission ");
    }
    
    
    
  }
  const __takePicture = async () => {
    // if (!ref.camera) { console.log("camera not found"); return}
    const options = {
      quality: 1,
      base64: false,
      fixOrientation: true,
      exif: true,
    };
    const photo = await ref.current?.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setStartCamera(false);
    setCapturedImage(photo);
  };

  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  }

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Camera style={styles.camera} type={type} ref={ref} ratio="16:9">
          <View style={styles.buttonContainer}>
            <IconButton
              icon="camera-metering-partial"
              style={styles.button}
              color="white"
              size={30}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />

            <IconButton
              icon="camera"
              style={styles.button2}
              color="white"
              size={40}
              onPress={() => {
                __takePicture();
              }}
            />
          </View>
        </Camera>
      ) : (
        [
          previewVisible ? (
            <CameraPreview photo={captureImage} key={0} retackPicture={__retakePicture} savePicture={__savePicture}/>
          ) : (
            <View style={styles.startCamera} key={1}>
              <Button
                icon="camera-iris"
                mode="outlined"
                onPress={() => {
                  __startCamera();
                }}
              >
                Camture Image
              </Button>

              <Button
                icon="camera-plus"
                mode="outlined"
                style={{ marginTop:20 }}
                onPress={() => {
                  pickImage();
                }}
              >
                Pic Image
              </Button>
              {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 ,  marginTop:20 }} />}
              <Button
                icon="camera-plus"
                mode="outlined"
                style={{ marginTop:20 }}
                onPress={() => {
                  uploadImage();
                }}
              >
                Upload Image
              </Button>

            </View>
          ),
        ]
      )}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    // margin: 20,
  },
  startCamera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCapture: {},
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  button2: {
    marginLeft: 95,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
