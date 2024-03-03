import React from "react";
import { ScrollView, StyleSheet, Alert, View } from "react-native";
import { Card, Button, Paragraph, useTheme } from "react-native-paper";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

// Dummy data representing user's commitments
interface AgendaItem {
  name: string; // Use 'name' instead of 'title' if that's what your component expects
  id: string;
  status: string;
  height: number;
  // Include other properties as needed, such as 'height' if your custom Agenda component requires it
}

type AgendaItems = Record<string, AgendaItem[]>; // A record of dates to arrays of agenda items

// Adjusted commitments data to fit the expected structure
const commitments: AgendaItems = {
  "2024-03-20": [
    {
      name: "Community Garden Volunteer",
      id: "1",
      status: "pending",
      height: 40,
    }, // Changed 'title' to 'name'
  ],
  "2024-03-25": [
    { name: "Local Library Helper", id: "2", status: "pending", height: 40 },
  ],
};

const MyCommitmentsScreen: React.FC = () => {
  const { colors } = useTheme();

  const handlePress = (commitmentId: string, action: "complete" | "cancel") => {
    // Placeholder function to handle commitment actions
    Alert.alert(
      "Commitment Update",
      `You have chosen to ${action} the commitment with ID: ${commitmentId}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
    // Implement actual logic to update the commitment's status in your application's state or backend
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 600 }}>
        <Agenda
          items={commitments}
          renderItem={(item, firstItemInDay) => (
            <Card style={styles.card}>
              <Card.Content>
                <Paragraph>{item.title}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => handlePress(item.id, "complete")}>
                  Complete
                </Button>
                <Button onPress={() => handlePress(item.id, "cancel")}>
                  Cancel
                </Button>
              </Card.Actions>
            </Card>
          )}
          theme={{
            agendaDayTextColor: colors.primary,
            agendaDayNumColor: colors.primary,
            agendaTodayColor: colors.primary,
            agendaKnobColor: colors.secondary,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 8,
    borderRadius: 8,
  },
});

export default MyCommitmentsScreen;
