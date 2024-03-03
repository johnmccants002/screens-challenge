import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Paragraph, Title, useTheme } from "react-native-paper";

interface OpportunityDetailsProps {
  // Assuming this data is passed down through navigation or context
  opportunity: {
    id: string;
    title: string;
    organization: string;
    mission: string;
    task: string;
    timeCommitment: string;
  };
}

const VolunteerDetails: React.FC<OpportunityDetailsProps> = ({
  opportunity,
}) => {
  const { colors } = useTheme();

  const handleAcceptOpportunity = () => {
    // Implement functionality to accept the opportunity
    // This could involve adding the event to the user's calendar
    // and navigating to the "My Commitments" screen
    console.log("Opportunity accepted");
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={{ color: colors.primary }}>{opportunity.title}</Title>
          <Paragraph style={styles.paragraph}>
            Organization: {opportunity.organization}
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            Mission: {opportunity.mission}
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            Task: {opportunity.task}
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            Time Commitment: {opportunity.timeCommitment}
          </Paragraph>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            onPress={handleAcceptOpportunity}
            style={styles.button}
          >
            Accept Opportunity
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  card: {
    margin: 8,
    elevation: 4,
  },
  paragraph: {
    marginBottom: 10,
  },
  actions: {
    justifyContent: "flex-end",
    marginRight: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#6200ee", // Customize the color to fit your app theme
  },
});

export default VolunteerDetails;
