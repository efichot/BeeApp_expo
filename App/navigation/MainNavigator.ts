import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
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
    drawerBackgroundColor: "rgb(27, 19, 62)"
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
    initialRouteName: "MyDashboard"
  }
);

export default createAppContainer(stackNavigator);
