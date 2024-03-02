import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Appbar, Button, Card, Paragraph, Title } from "react-native-paper";

// Assuming a type for Plant details
type PlantDetails = {
  id: string;
  name: string;
  imageUrl: string;
  wateringFrequency: number; // in days
  sunlightNeeds: string;
  fertilizerRequirements: string;
  lastWateredDate: Date;
};

// Sample data for a selected plant, in a real app this data might come from state management or navigation parameters
const samplePlant: PlantDetails = {
  id: "1",
  name: "Fiddle Leaf Fig",
  imageUrl: "https://example.com/image1.jpg",
  wateringFrequency: 7, // every 7 days
  sunlightNeeds: "Indirect sunlight",
  fertilizerRequirements: "Once a month during spring and summer",
  lastWateredDate: new Date(),
};

const PlantDetailsScreen: React.FC = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [plant, setPlant] = useState<PlantDetails>(samplePlant);

  const handleWatered = () => {
    const today = new Date();
    setPlant({ ...plant, lastWateredDate: today });
    // Here you would also update the next watering date based on your app's logic
    // This could involve calculating the next date based on wateringFrequency and updating state or backend
  };

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={router.back} />
        {/* Implement navigation logic */}
        <Appbar.Content title={plant.name} />
      </Appbar.Header>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: plant.imageUrl }} />
        <Card.Content>
          <Title>{plant.name}</Title>
          <Paragraph>Water every {plant.wateringFrequency} days</Paragraph>
          <Paragraph>Sunlight Needs: {plant.sunlightNeeds}</Paragraph>
          <Paragraph>
            Fertilizer Requirements: {plant.fertilizerRequirements}
          </Paragraph>
          <Paragraph>
            Last Watered: {plant.lastWateredDate.toDateString()}
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handleWatered}>Mark as Watered</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 10,
  },
});

export default PlantDetailsScreen;
