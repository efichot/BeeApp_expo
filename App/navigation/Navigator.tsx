import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { appNavigation, authNavigation } from "./navigation";

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function AppBottomTab() {
  return (
    <Tab.Navigator
      activeColor="white"
      inactiveColor="rgb(116, 110, 145)"
      barStyle={{ backgroundColor: "rgba(27, 19, 62, 0.8)" }}
    >
      {appNavigation.map(({ name, component, icon }) => (
        <Tab.Screen
          name={name}
          component={component}
          options={{
            tabBarLabel: name,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name={icon} size={24} color={color} />
            )
          }}
          key={name}
        />
      ))}
    </Tab.Navigator>
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
      <Stack.Screen name="App" component={AppBottomTab} key="App" />
    </Stack.Navigator>
  );
};

export default Navigator;
