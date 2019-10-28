import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainNavigator from "../app/navigation/MainNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Main: MainNavigator
  })
);
