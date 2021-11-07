import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import Users from "../assets/dummy-data/Users";
import UserItem from "./../components/UserItem/UserItem";

export default function UsersScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={Users}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity activeOpacity={0.6}>
            <UserItem user={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  page: { backgroundColor: "white", flex: 1 },
});
