import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Notifications, SplashScreen } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Navigator from "./App/navigation/Navigator";
import useLinking from "./App/navigation/useLinking";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  function importAll(r) {
    return r.keys().map(r);
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load assets and fonts
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
            ...Ionicons.font,
            ".AppleSystemUIFont": require("./assets/fonts/SFNSText.ttf"),
            ".SFNSDisplay": require("./assets/fonts/SFNSDisplay.ttf"),
            "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
            "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
            "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf")
          })
        ]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    async function registerForPushNotificationsAsync() {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        alert("No notification permissions!");
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      console.log("TCL: registerForPushNotificationsAsync -> token", token);
    }

    loadResourcesAndDataAsync();
    Platform.OS !== "web" && registerForPushNotificationsAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Navigator />
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
