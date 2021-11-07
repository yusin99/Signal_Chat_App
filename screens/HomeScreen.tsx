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
import LogoutButton from "./../components/LogoutButton/LogoutButton";

export default function TabOneScreen() {
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
      <LogoutButton />
    </View>
  );
}
const styles = StyleSheet.create({
  page: { backgroundColor: "white", flex: 1 },
});
