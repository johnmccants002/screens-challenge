import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // This is to use the info icon

interface RestaurantCardProps {
  name: string;
  address: string;
  rating: number;
  reviews: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  address,
  rating,
  reviews,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../assets/images/icon.png")} // Replace with your local image
        style={styles.logo}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity style={styles.bestOffersButton}>
          <Text style={styles.bestOffersText}>Best Offers</Text>
        </TouchableOpacity>
        <Text style={styles.address}>{address}</Text>
        <View style={styles.ratingContainer}>
          {/* Render stars based on the rating */}
          {[...Array(5)].map((_, index) => (
            <Ionicons
              name={index < rating ? "star" : "star-outline"}
              size={20}
              color="#FFD700"
              key={index}
            />
          ))}
          <Text style={styles.reviewCount}>({reviews} reviews)</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.infoIcon}>
        <Ionicons name="information-circle-outline" size={24} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantScrollView = () => {
  // Assuming you have an array of restaurant data
  const restaurants = [
    {
      name: "Starbucks St.",
      address: "Tillary Street, Brooklyn, NY",
      rating: 4,
      reviews: 895,
    },
    {
      name: "Cafe Grumpy",
      address: "193 Meserole Ave, Brooklyn, NY",
      rating: 5,
      reviews: 320,
    },
    {
      name: "Blue Bottle Coffee",
      address: "76 N 4th St, Brooklyn, NY",
      rating: 4.5,
      reviews: 215,
    },
    {
      name: "Birch Coffee",
      address: "8 Spruce St, New York, NY",
      rating: 4,
      reviews: 128,
    },
    {
      name: "Stumptown Coffee Roasters",
      address: "30 W 8th St, New York, NY",
      rating: 4.5,
      reviews: 432,
    },
    {
      name: "Think Coffee",
      address: "123 4th Ave, New York, NY",
      rating: 4,
      reviews: 224,
    },
    // Add as many objects as needed for your dummy data
  ];

  return (
    <ScrollView style={styles.scrollView}>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} {...restaurant} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // for Android
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  bestOffersButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 5,
    alignSelf: "flex-start",
  },
  bestOffersText: {
    color: "white",
    fontSize: 12,
  },
  address: {
    fontSize: 14,
    color: "grey",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 14,
    color: "grey",
  },
  infoIcon: {
    padding: 10,
  },
  // Add more styles as necessary
});

export default RestaurantScrollView;
