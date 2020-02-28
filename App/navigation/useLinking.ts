import { useLinking } from "@react-navigation/native";
import { Linking } from "expo";

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      App: {
        path: "App",
        screens: {
          MyDashboard: "MyDashboard",
          Contacts: "Contacts"
        }
      }
    }
  });
}
