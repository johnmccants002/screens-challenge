import { Link, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, FlatList, ViewStyle, Pressable } from "react-native";
import { Provider, Appbar, Card, Text } from "react-native-paper";

// Define a type for individual plant items
type Plant = {
  id: string;
  name: string;
  nextWatering: string;
  imageUrl: string;
};

// Sample data for plants
const plantsData: Plant[] = [
  {
    id: "1",
    name: "Fiddle Leaf Fig",
    nextWatering: "Tomorrow",
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    id: "2",
    name: "Snake Plant",
    nextWatering: "In 3 days",
    imageUrl: "https://example.com/image2.jpg",
  },
  // Add more plants as needed
];

// Optionally, define types for any props your component might use
// For this basic example, we don't have props being passed in, so this is just for demonstration
interface HomeScreenProps {}

const PlantHomeScreen: React.FC<HomeScreenProps> = () => {
  const router = useRouter();
  // Define the renderItem function with proper typing
  const renderItem = ({ item }: { item: Plant }) => (
    <Link href={`/plants/${item.id}`} asChild>
      <Pressable>
        <Card style={{ margin: 8 } as ViewStyle}>
          <Card.Cover source={{ uri: item.imageUrl }} />
          <Card.Content>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 8 }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 16, color: "#777", marginBottom: 8 }}>
              Next watering: {item.nextWatering}
            </Text>
          </Card.Content>
        </Card>
      </Pressable>
    </Link>
  );

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
        <Appbar.Header>
          <Appbar.Content title="My Plants" />
          <Appbar.Action
            icon="plus"
            onPress={() => router.push("/plants/add-plant")}
          />
        </Appbar.Header>
        <FlatList<Plant>
          data={plantsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 8 }}
        />
      </SafeAreaView>
    </Provider>
  );
};

export default PlantHomeScreen;
