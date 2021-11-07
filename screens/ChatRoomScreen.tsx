import React, { useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Message from "./../components/Message/Message";
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "./../components/MessageInput/MessageInput";
import { useNavigation, useRoute } from "@react-navigation/core";

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ title: "Elon Musk" });
  }, []);

  const idRoom = route.params?.id;
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={chatRoomData.messages}
        inverted
        style={{ backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity activeOpacity={0.6}>
            <Message message={item} />
          </TouchableOpacity>
        )}
      />
      <MessageInput />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
});
export default ChatRoomScreen;
