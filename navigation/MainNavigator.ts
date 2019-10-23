import { createAppContainer, createStackNavigator } from "react-navigation";
import GetStarted from "../screens/GetStarted";
import SignIn from "../screens/SignIn";

const PushRouteOne = createStackNavigator(
  {
    GetStarted: {
      screen: GetStarted
    },
    SignIn: {
      screen: SignIn
    }
  },
  {
    initialRouteName: "GetStarted"
  }
);

// const PushRouteTwo = createStackNavigator(
//   {
//     UntitledFour: {
//       screen: UntitledFour
//     },
//     UntitledTwo: {
//       screen: UntitledTwo
//     },
//     Untitled: {
//       screen: Untitled
//     },
//     UntitledSeven: {
//       screen: UntitledSeven
//     }
//   },
//   {
//     initialRouteName: "UntitledFour"
//   }
// );

// const PushRouteThree = createStackNavigator(
//   {
//     UntitledThree: {
//       screen: UntitledThree
//     },
//     UntitledTwo: {
//       screen: UntitledTwo
//     }
//   },
//   {
//     initialRouteName: "UntitledThree"
//   }
// );

const RootNavigator = createStackNavigator(
  {
    PushRouteOne: {
      screen: PushRouteOne
    }
    // PushRouteTwo: {
    //   screen: PushRouteTwo
    // },
    // PushRouteThree: {
    //   screen: PushRouteThree
    // }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "PushRouteOne"
  }
);

export default createAppContainer(RootNavigator);
