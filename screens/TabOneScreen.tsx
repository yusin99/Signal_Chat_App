import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import ChatRoomItem from "../components/ChatRoomItem";
import chatRoomsData from "../assets/dummy-data/ChatRooms";
import Toast from "react-native-toast-message";

export default function TabOneScreen() {
  const chatRoom1 = chatRoomsData[3];
  const chatRoom2 = chatRoomsData[2];
  return (
    <View style={styles.page}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={chatRoomsData}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          alert("No more messages");
        }}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity activeOpacity={0.6}>
            <ChatRoomItem chatRoom={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  page: { backgroundColor: Colors.white, flex: 1 },
});
