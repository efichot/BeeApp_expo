import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainNavigator from "./App/MainNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Main: MainNavigator
  })
);
