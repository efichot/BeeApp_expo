import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const LogoutIcon: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: "absolute",
        right: 30,
        top: 10,
        zIndex: 100
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
        <Ionicons name="ios-power" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default LogoutIcon;
