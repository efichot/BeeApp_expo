import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";
import MainNavigator from "./App/MainNavigator";

const switchNavigator: any = createSwitchNavigator({
  Main: MainNavigator
});

switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
