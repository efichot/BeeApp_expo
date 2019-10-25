import { createAppContainer, createStackNavigator } from "react-navigation";
import GetStarted from "./screens/GetStarted";
import MyDashboard from "./screens/MyDashboard";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import SuccessSignIn from "./screens/SuccessSignIn";

const PushRouteOne = createStackNavigator(
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
    }
  },
  {
    initialRouteName: "GetStarted"
  }
);

const PushRouteTwo = createStackNavigator(
  {
    MyDashboard: {
      screen: MyDashboard
    }
    // SendMoney: {
    //   screen: SendMoney
    // },
    // Contacts: {
    //   screen: Contacts
    // }
  },
  {
    initialRouteName: "MyDashboard"
  }
);

// const PushRouteThree = createStackNavigator(
//   {
//     SuccessSend: {
//       screen: SuccessSend
//     },
//     MyDashboard: {
//       screen: MyDashboard
//     }
//   },
//   {
//     initialRouteName: "SuccessSend"
//   }
// );

const RootNavigator = createStackNavigator(
  {
    PushRouteOne: {
      screen: PushRouteOne
    },
    PushRouteTwo: {
      screen: PushRouteTwo
    }
    //   PushRouteThree: {
    //     screen: PushRouteThree
    //   }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "PushRouteOne"
  }
);

export default createAppContainer(RootNavigator);
