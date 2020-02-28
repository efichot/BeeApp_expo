import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { isSmallDevice } from "../constants/layout";

const LateralNav: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const navBar = ["MyDashboard", "Contacts"];

  if (isSmallDevice) return null;
  return (
    <View style={styles.nav}>
      {navBar.map(name => (
        <TouchableOpacity
          onPress={() => navigation.navigate(name)}
          disabled={route.name === name}
          key={name}
        >
          <Text style={route.name === name ? styles.itemActive : styles.item}>
            {name}
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
