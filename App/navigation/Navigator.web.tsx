import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { isSmallDevice } from "../constants/layout";
import { appNavigation, authNavigation } from "./navigation";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "rgb(27, 19, 62)",
        width: 200
      }}
      drawerContentOptions={{
        activeTintColor: "rgb(116, 110, 145)",
        inactiveTintColor: "rgba(116, 110, 145, 0.4)"
      }}
    >
      {appNavigation.map(({ name, component }) => (
        <Drawer.Screen name={name} component={component} key={name} />
      ))}
    </Drawer.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {appNavigation.map(({ name, component }) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
    </Stack.Navigator>
  );
}

const Navigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {authNavigation.map(({ name, component }) => (
        <Stack.Screen name={name} component={component} key={name} />
      ))}
      <Stack.Screen
        name="App"
        component={isSmallDevice ? AppDrawer : AppStack}
        key="App"
      />
    </Stack.Navigator>
  );
};

export default Navigator;
