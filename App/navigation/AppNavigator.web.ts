import { createBrowserApp } from "@react-navigation/web";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import Contacts from "../screens/Contacts";
import GetStarted from "../screens/GetStarted";
import MyDashboard from "../screens/MyDashboard";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import SuccessSignIn from "../screens/SuccessSignIn";
import "./../../global.css";

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

const stackNavigator = createStackNavigator(
  {
    GetStarted,
    SignUp,
    SignIn,
    SuccessSignIn,
    MyDashboard: {
      screen: drawer
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "GetStarted"
  }
);

const MainNavigator = createAppContainer(stackNavigator);

const switchNavigator: any = createSwitchNavigator({
  Main: MainNavigator
});

switchNavigator.path = "";

export default createBrowserApp(switchNavigator);
