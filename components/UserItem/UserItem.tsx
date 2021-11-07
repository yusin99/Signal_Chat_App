import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Colors from "../../constants/Colors";

export default function UserItem({ user }: any) {
  const navigation = useNavigation();
  const navigateScreen = () => {
    // Create a chat room with him
  };
  return (
    <Pressable onPress={navigateScreen} style={styles.container}>
      <Image style={styles.image} source={{ uri: user.imageUri }} />
      <View style={styles.rightContainer}>
        <View style={styles.message}>
          <View style={styles.row}>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    position: "relative",
    backgroundColor: Colors.white,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 777,
    marginRight: 15,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 2,
  },
  message: {},
  text: {
    color: "#cccccc",
    fontSize: 15,
  },
  badgeContainer: {
    backgroundColor: Colors.signalColor,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 777,
    borderWidth: 2,
    borderColor: Colors.white,
    position: "absolute",
    left: 50,
    top: 10,
  },
  badgeText: { color: Colors.white, fontSize: 12 },
});
