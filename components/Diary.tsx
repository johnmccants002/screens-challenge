import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Diary() {
  // State hooks and functions for handling entries would go here
  const entries = [
    {
      id: "1",
      date: "2024-03-01",
      summary:
        "Today was a beautiful day. I went for a walk in the park and enjoyed the sunshine...",
    },
    {
      id: "2",
      date: "2024-02-28",
      summary:
        "Had a challenging day at work, but I learned a lot from the experience. I need to remember...",
    },
    {
      id: "3",
      date: "2024-02-27",
      summary:
        "Spent the evening reading a fascinating book. Its amazing how much you can escape into another world...",
    },
    // Add more entries as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Journal</Text>
        <AntDesign name="setting" size={24} color="black" />
        {/* Settings Icon */}
      </View>

      {/* Entry List or No Entries Illustration */}
      <FlatList
        data={entries}
        renderItem={({ item }) => <JournalEntry entry={item} key={item.id} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.noEntriesText}>
            No entries yet. Tap the + to start writing!
          </Text>
        }
      />

      {/* FAB */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          /* Open new entry modal */
        }}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>

      {/* New Entry Modal would go here */}
    </View>
  );
}

const JournalEntry = ({ entry }) => {
  return (
    <View style={styles.entryContainer}>
      <Text style={styles.entryDate}>{entry.date}</Text>
      <Text style={styles.entrySummary}>{entry.summary}</Text>
      <TouchableOpacity style={styles.editIcon}>
        <AntDesign
          name="edit"
          size={20}
          color="darkslategray"
          //   style={styles.editIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFACD",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#957DAD",
  },
  headerTitle: {
    color: "#2F4F4F",
    fontSize: 24,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#008080",
    borderRadius: 50,
    padding: 15,
  },
  noEntriesText: {
    marginTop: 20,
    textAlign: "center",
    color: "#2F4F4F",
  },
  entryContainer: {
    backgroundColor: "cream",
    padding: 15,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  entryDate: {
    color: "teal",
    fontSize: 16,
    fontWeight: "bold",
  },
  entrySummary: {
    color: "darkslategray",
    fontSize: 14,
    flex: 1,
    paddingHorizontal: 10,
  },
  editIcon: {
    // Styling for the edit icon to align it to the right
  },
  // Styles for other components (New Entry Modal, Entry List Items, etc.) would be added here
});
