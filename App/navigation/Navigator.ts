import { Platform } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Contacts from "../screens/Contacts";
import GetStarted from "../screens/GetStarted";
import MyDashboard from "../screens/MyDashboard";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import SuccessSignIn from "../screens/SuccessSignIn";

const authNavigation = {
  GetStarted,
  SignUp,
  SignIn,
  SuccessSignIn
};

const appNavigation = {
  MyDashboard,
  Contacts
};

const drawer = createDrawerNavigator(appNavigation, {
  drawerBackgroundColor: "rgb(27, 19, 62)",
  drawerType: "back",
  drawerWidth: 200,
  contentOptions: {
    activeTintColor: "rgb(116, 110, 145)",
    inactiveTintColor: "rgba(116, 110, 145, 0.4)"
  },
  initialRouteName: "MyDashboard"
});

const tabNavigator = createMaterialBottomTabNavigator(appNavigation, {
  initialRouteName: "MyDashboard",
  activeColor: "white",
  inactiveColor: "rgb(116, 110, 145)",
  barStyle: { backgroundColor: "rgba(27, 19, 62, 0.8)" }
});

const stackNavigatorAuth = createStackNavigator(authNavigation, {
  mode: "modal",
  headerMode: "none",
  initialRouteName: "GetStarted"
});

const Navigator: any = createSwitchNavigator(
  {
    Auth: createAppContainer(stackNavigatorAuth),
    App: createAppContainer(Platform.OS === "web" ? drawer : tabNavigator)
  },
  { initialRouteName: "Auth" }
);

Navigator.path = "";

export default Navigator;
