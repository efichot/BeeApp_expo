import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { isSmallDevice } from "../constants/layout";

const IconDrawer: React.FC = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row" }}>
      {Platform.OS === "web" && isSmallDevice && (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Ionicons
            name="md-menu"
            size={32}
            color="white"
            style={{
              marginRight: 5
            }}
          />
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
};

export default IconDrawer;
