import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";
import "./../../global.css";
import MainNavigator from "./MainNavigator";

const switchNavigator: any = createSwitchNavigator({
  Main: MainNavigator
});

switchNavigator.path = "";

export default createBrowserApp(switchNavigator);
