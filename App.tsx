import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  function importAll(r) {
    return r.keys().map(r);
  }

  await Promise.all([
    Asset.loadAsync(
      Platform.OS === "web"
        ? importAll(
            require.context(
              "./assets/images",
              false,
              /^[^@]+\.(png|jpe?g|svg)$/
            )
          )
        : []
    ),
    Font.loadAsync({
      ".AppleSystemUIFont": require("./assets/fonts/SFNSText.ttf"),
      ".SFNSDisplay": require("./assets/fonts/SFNSDisplay.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
