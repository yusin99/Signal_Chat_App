import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/Colors";

const Message = ({ message }: any) => {
  const myID = "u1";
  const isMe = message.user.id === myID;

  return (
    <View style={isMe ? styles.containerMe : styles.container}>
      <Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.signalColor,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: "auto",
    maxWidth: "75%",
  },
  containerMe: {
    backgroundColor: "lightgrey",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: 10,
    maxWidth: "75%",
  },
});
export default Message;
