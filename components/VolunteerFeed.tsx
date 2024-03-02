import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Card,
  Button,
  Text,
  Title,
  Paragraph,
  Provider,
} from "react-native-paper";

import DropdownMenu from "./DropdownMenu";

interface Opportunity {
  id: string;
  title: string;
  description: string;
  category: string;
  timeCommitment: string;
}

const sampleOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "Local Park Clean-up",
    description: "Join us to clean up our local park this weekend.",
    category: "Environmental",
    timeCommitment: "3 hours",
  },
  {
    id: "2",
    title: "Weekly Tutoring",
    description: "Help tutor students in math and science.",
    category: "Educational",
    timeCommitment: "2 hours/week",
  },
  // Add more opportunities as needed
];

const VolunteerFeed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoryList = [
    { label: "All", value: "all" },
    { label: "Environmental", value: "environmental" },
    { label: "Educational", value: "educational" },
    // Add more categories as needed
  ];

  const [opportunities, setOpportunities] =
    useState<Opportunity[]>(sampleOpportunities);

  // Placeholder function for category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Add filtering logic based on the selected category
  };

  return (
    <Provider>
      <ScrollView style={styles.container}>
        <DropdownMenu
          label="Filter by Category"
          value={selectedCategory}
          setValue={setSelectedCategory}
          list={categoryList}
        />

        <View style={{ paddingTop: 20 }}>
          {opportunities.map((opportunity) => (
            <Card key={opportunity.id} style={styles.card}>
              <Card.Content>
                <Title>{opportunity.title}</Title>
                <Paragraph>{opportunity.description}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button>Learn More</Button>
              </Card.Actions>
            </Card>
          ))}
        </View>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    alignItems: "center",
  },
  card: {
    marginBottom: 8,
  },
});

export default VolunteerFeed;
