import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Colors from "../../constants/Colors";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    console.warn("Sending..");
    setMessage("");
  };
  const onPlusClicked = () => {
    console.warn("Clicked plus..");
  };
  const onSend = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <KeyboardAvoidingView
      style={styles.root}
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <SimpleLineIcons
            name="emotsmile"
            style={styles.icon}
            size={24}
            color={Colors.signalColor}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Signal message"
        />
        <TouchableOpacity>
          <Feather
            style={styles.icon}
            name="camera"
            size={24}
            color={Colors.signalColor}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            style={styles.icon}
            color={Colors.signalColor}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Pressable onPress={onSend} style={styles.buttonContainer}>
          {message ? (
            <Ionicons name="send" size={24} color={"white"} />
          ) : (
            <AntDesign name="plus" size={24} color={"white"} />
          )}
        </Pressable>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
  icon: {
    marginLeft: 10,
  },
  inputContainer: {
    paddingRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dedede",
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    marginHorizontal: 10,

    marginBottom: 10,
    backgroundColor: Colors.signalColor,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MessageInput;
