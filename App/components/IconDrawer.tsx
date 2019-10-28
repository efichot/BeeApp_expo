import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { isSmallDevice } from "../constants/layout";

const IconDrawer: React.FC = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row" }}>
      {isSmallDevice && (
        <TouchableOpacity onPress={navigation.openDrawer}>
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
