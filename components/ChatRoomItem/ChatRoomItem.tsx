import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";

export default function ChatRoomItem({ chatRoom }: any) {
  const user = chatRoom.users[1];
  const navigation = useNavigation();
  const navigateScreen = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };
  return (
    <Pressable onPress={navigateScreen} style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{ uri: user.imageUri }} />
      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}
      <View style={styles.rightContainer}>
        {/* Name and the message */}
        <View style={styles.message}>
          <View style={styles.row}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
