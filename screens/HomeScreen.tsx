import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Colors from "../constants/Colors";
import ChatRoomItem from "../components/ChatRoomItem";
import chatRoomsData from "../assets/dummy-data/ChatRooms";
import Toast from "react-native-toast-message";
import Auth from "@aws-amplify/auth";

export default function TabOneScreen() {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View style={styles.page}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={chatRoomsData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity activeOpacity={0.6}>
            <ChatRoomItem chatRoom={item} />
          </TouchableOpacity>
        )}
      />
      <Pressable
        onPress={logout}
        style={{
          backgroundColor: "white",
          height: 50,
          // padding: 10,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
          borderRadius: 50,
        }}
      >
        <Text style={{ color: Colors.signalColor, fontSize: 22 }}>Logout</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  page: { backgroundColor: Colors.signalColor, flex: 1 },
});
