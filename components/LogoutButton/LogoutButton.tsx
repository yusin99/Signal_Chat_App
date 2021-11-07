import Auth from "@aws-amplify/auth";
import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, Pressable } from "react-native";
import Colors from "../../constants/Colors";

export default function LogoutButton() {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <Pressable
      onPress={logout}
      style={{
        position: "absolute",
        flexDirection: "row",
        bottom: 5,
        right: 10,
        backgroundColor: Colors.signalColor,
        height: 50,
        paddingHorizontal: 30,
        margin: 10,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>Logout </Text>
      <AntDesign name="logout" size={24} color="white" />
    </Pressable>
  );
}
