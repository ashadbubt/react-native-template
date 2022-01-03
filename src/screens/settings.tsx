import React, { useState, FC, useEffect, useRef } from "react";
import { StyleSheet, Text, Alert, View, TouchableOpacity , ImageBackground} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { Camera } from "expo-camera";

const Settings: FC = () => {
  const [startCamera, setStartCamera] = useState<boolean>(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [captureImage, setCapturedImage] = useState<any>(null);

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
            <View
              style={{
                backgroundColor: "transparent",
                flex: 1,
                width: "100%",
                height: "100%",
              }}
            >
              <ImageBackground
                source={{ uri: captureImage && captureImage.uri }}
                style={{
                  flex: 1,
                }}
              />
            </View>
          ) : (
            <View style={styles.startCamera}>
              <Button
                icon="camera-iris"
                mode="outlined"
                onPress={() => {
                  __startCamera();
                }}
              >
                Camture Image
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
