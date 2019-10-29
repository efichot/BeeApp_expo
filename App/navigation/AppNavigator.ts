import {
  createAppContainer,
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

const tabNavigator = createMaterialBottomTabNavigator(
  {
    MyDashboard,
    Contacts
  },
  {
    initialRouteName: "MyDashboard",
    activeColor: "rgb(116, 110, 145)",
    inactiveColor: "rgba(116, 110, 145, 0.4)",
    barStyle: { backgroundColor: "rgba(27, 19, 62, 0.7)" }
  }
);

const stackNavigator = createStackNavigator(
  {
    GetStarted,
    SignUp,
    SignIn,
    SuccessSignIn,
    MyDashboard: {
      screen: tabNavigator
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "MyDashboard"
  }
);

const MainNavigator = createAppContainer(stackNavigator);

export default createAppContainer(
  createSwitchNavigator({
    Main: MainNavigator
  })
);
