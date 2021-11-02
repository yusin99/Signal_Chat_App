import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";

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
export default styles;
