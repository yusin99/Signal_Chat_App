/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/Colors";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ChatRoomScreen from "./../screens/ChatRoomScreen";
import HomeScreen from "./../screens/HomeScreen";
import { Text } from "react-native";
import { View } from "react-native";
import UsersScreen from "./../screens/UsersScreen";
import { useNavigation } from "@react-navigation/core";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: (props) => <HomeHeader {...props} />,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: Colors.signalColor,
          },
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerShown: true,
          headerTitle: ChatRoomHeader,
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: Colors.signalColor,
          },
        }}
      />
      <Stack.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{
          title: "All Users",
          headerShown: true,
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: Colors.signalColor,
          },
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
const HomeHeader = (props: any) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width,
        paddingVertical: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginLeft: 40,
          fontWeight: "300",
          fontSize: 22,
          color: "white",
        }}
      >
        Signal
      </Text>
      <Feather
        name="camera"
        size={24}
        color="white"
        style={{ marginHorizontal: 10 }}
      />
      <Pressable
        onPress={() => {
          navigation.navigate("UsersScreen");
        }}
      >
        <Feather
          name="edit-2"
          size={24}
          color="white"
          style={{ marginRight: 30, marginLeft: 10 }}
        />
      </Pressable>
    </View>
  );
};
const ChatRoomHeader = (props: any) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width - 90,
        marginLeft: "auto",
        // marginRight: ,
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          flex: 1,
          // textAlign: "center",
          marginLeft: 10,
          fontWeight: "300",
          fontSize: 18,
          color: "white",
        }}
      >
        {props.children}
      </Text>
      <Entypo
        name="video-camera"
        size={24}
        color="white"
        style={{ marginHorizontal: 10 }}
      />
      <AntDesign
        name="phone"
        size={24}
        color="white"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
