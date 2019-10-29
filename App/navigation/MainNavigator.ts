import { Platform } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Contacts from "../screens/Contacts";
import GetStarted from "../screens/GetStarted";
import MyDashboard from "../screens/MyDashboard";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import SuccessSignIn from "../screens/SuccessSignIn";

const drawer = createDrawerNavigator(
  {
    MyDashboard,
    Contacts
  },
  {
    drawerBackgroundColor: "rgb(27, 19, 62)",
    drawerType: "back",
    drawerWidth: 200,
    contentOptions: {
      activeTintColor: "rgb(116, 110, 145)",
      inactiveTintColor: "rgba(116, 110, 145, 0.4)"
    }
  }
);

const tabNavigator = createMaterialBottomTabNavigator(
  {
    MyDashboard,
    Contacts
  },
  {
    initialRouteName: "MyDashboard",
    activeColor: "white",
    inactiveColor: "rgb(116, 110, 145)",
    barStyle: { backgroundColor: "rgba(27, 19, 62, 0.8)" }
  }
);

const stackNavigator = createStackNavigator(
  {
    GetStarted,
    SignUp,
    SignIn,
    SuccessSignIn,
    MyDashboard: {
      screen: Platform.OS === "web" ? drawer : tabNavigator
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "MyDashboard"
  }
);

export default createAppContainer(stackNavigator);
