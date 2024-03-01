import { Pressable, StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href="/costco-shop" asChild>
        <Pressable style={styles.row}>
          {({ pressed }) => (
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                borderBottomWidth: 2,
                backgroundColor: "white",
                borderBottomColor: "gray",
                alignItems: "center",
                paddingHorizontal: 8,
                height: 60,
              }}
            >
              <Text style={styles.textLabel}> Costco Shop Screen </Text>
              <FontAwesome name="caret-right" size={30} color={"black"} />
            </View>
          )}
        </Pressable>
      </Link>
      <Link href="/restaurant-map" asChild>
        <Pressable style={styles.row}>
          {({ pressed }) => (
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                borderBottomWidth: 2,
                backgroundColor: "white",
                borderBottomColor: "gray",
                alignItems: "center",
                paddingHorizontal: 8,
                height: 60,
              }}
            >
              <Text style={styles.textLabel}> Restaurant Map Screen </Text>
              <FontAwesome name="caret-right" size={30} color={"black"} />
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
