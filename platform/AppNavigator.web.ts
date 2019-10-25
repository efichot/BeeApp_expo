import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";
import MainNavigator from "../app/MainNavigator";

const switchNavigator: any = createSwitchNavigator({
  Main: MainNavigator
});

switchNavigator.path = "";

export default createBrowserApp(switchNavigator);
