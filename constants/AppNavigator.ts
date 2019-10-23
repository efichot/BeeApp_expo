import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainNavigator from "../app/MainNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Main: MainNavigator
  })
);
