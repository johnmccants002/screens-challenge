import { Pressable, StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const screens = [
  {
    path: "/costco-shop",
    label: "Costco Shop Screen",
  },
  {
    path: "/restaurant-map",
    label: "Restaurant Map Screen",
  },
  {
    path: "/diary",
    label: "Diary",
  },
  {
    path: "/compatibility",
    label: "Compatibility Checker",
  },
  {
    path: "/plants",
    label: "Plant Home Screen",
  },
  // Add more screens as needed
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {screens.map((screen) => (
        <Link key={screen.path} href={screen.path} asChild>
          <Pressable>
            {({ pressed }) => (
              <View style={styles.rowContainer}>
                <Text style={styles.textLabel}>{screen.label}</Text>
                <FontAwesome name="caret-right" size={30} color={"black"} />
              </View>
            )}
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  rowContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  row: {
    width: "auto",
    height: 60,
    flexDirection: "row",

    alignItems: "center",
  },
  textLabel: {
    paddingLeft: 20,
    fontFamily: "AmericanTypewriter-Bold",
    color: "black",
  },
});
