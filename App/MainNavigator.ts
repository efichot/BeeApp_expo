import { createAppContainer, createStackNavigator } from "react-navigation";
import Contacts from "./screens/Contacts";
import GetStarted from "./screens/GetStarted";
import MyDashboard from "./screens/MyDashboard";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import SuccessSignIn from "./screens/SuccessSignIn";

const RootNavigator = createStackNavigator(
  {
    GetStarted: {
      screen: GetStarted
    },
    SignUp: {
      screen: SignUp
    },
    SignIn: {
      screen: SignIn
    },
    SuccessSignIn: {
      screen: SuccessSignIn
    },
    MyDashboard: {
      screen: MyDashboard
    },
    Contacts: {
      screen: Contacts
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "Contacts"
  }
);

export default createAppContainer(RootNavigator);
