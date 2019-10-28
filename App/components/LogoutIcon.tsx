import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";

const LogoutIcon: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View
      style={{
        position: "absolute",
        right: 10,
        top: 10,
        zIndex: 100
      }}
    >
      <TouchableOpacity onPress={() => navigate("GetStarted")}>
        <Ionicons name="ios-power" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default LogoutIcon;
