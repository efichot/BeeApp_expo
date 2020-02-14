import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { isSmallDevice } from "../constants/layout";
import { appNavigation } from "../navigation/Navigator";

const LateralNav: React.FC = () => {
  const { navigate } = useNavigation();
  const { routeName } = useNavigationState();
  const navBar = Object.keys(appNavigation);

  if (isSmallDevice) return null;
  return (
    <View style={styles.nav}>
      {navBar.map(route => (
        <TouchableOpacity
          onPress={() => navigate(route)}
          disabled={routeName === route}
          key={route}
        >
          <Text style={routeName === route ? styles.itemActive : styles.item}>
            {route}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LateralNav;

const styles = StyleSheet.create({
  nav: {
    width: "130px",
    paddingLeft: "10px",
    marginTop: "-20px"
  },
  item: {
    color: "rgb(116, 110, 145)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginTop: 8
  },
  itemActive: {
    color: "rgb(116, 110, 145)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginTop: 8,
    opacity: 0.2
  }
});
