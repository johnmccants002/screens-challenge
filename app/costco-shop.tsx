import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  SectionList,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import React from "react";
const categories = [
  { title: "Appliances", icon: "snowflake-o" },
  { title: "Baby", icon: "child" },
  { title: "Beauty", icon: "diamond" },
  { title: "Clothing", icon: "shopping-bag" },
  { title: "Computers", icon: "laptop" },
  { title: "Costco Direct", icon: "truck" },
  { title: "Electronics", icon: "tv" },
  { title: "Floral", icon: "pagelines" },
  { title: "Furniture", icon: "bed" },
  { title: "Gourmet Foods", icon: "cutlery" },
  { title: "Grocery", icon: "shopping-basket" },
  { title: "Health and Personal", icon: "heart" },
  { title: "Holiday", icon: "gift" },
  { title: "Kitchen", icon: "coffee" },
  { title: "Home Improvement", icon: "wrench" },
  { title: "Office Products", icon: "briefcase" },
  { title: "Jewelry", icon: "life-ring" },
  { title: "Computers", icon: "laptop" },
];

const featuredCategories = [
  { title: "Pharmacy", icon: "medkit" },
  { title: "Optical", icon: "eye" },
  { title: "Travel", icon: "plane" },
];

export default function Screen() {
  const sections = [
    {
      title: "Featured Services",
      data: [{}], // Single item array to render the custom component once
    },
    {
      title: "All Departments",
      data: chunkArray(categories, 3),
    },
  ];

  function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  const renderFeaturedServices = () => (
    <View>
      {/* Featured Services */}
      <View style={styles.featuredServicesContainer}>
        {/* Pharmacy */}
        <View style={styles.featuredItemContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="medkit" color="red" size={40} />
          </View>
          <Text style={styles.itemText}>Pharmacy</Text>
        </View>
        {/* Optical */}
        <View style={styles.featuredItemContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="eye" color="red" size={40} />
          </View>
          <Text style={styles.itemText}>Optical</Text>
        </View>
        {/* Travel */}
        <View style={styles.featuredItemContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="plane" color="red" size={40} />
          </View>
          <Text style={styles.itemText}>Travel</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View
      style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
    >
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item, section }) => {
          if (section.title === "Featured Services") {
            return renderFeaturedServices();
          } else {
            // Correctly return JSX for the "else" case
            return (
              <View style={styles.featuredServicesContainer}>
                {item.map((item, index) => (
                  <View style={styles.featuredItemContainer} key={index}>
                    <View style={styles.iconContainer}>
                      <FontAwesome name={item.icon} color="red" size={40} />
                    </View>
                    <Text style={styles.itemText}>{item.title}</Text>
                  </View>
                ))}
              </View>
            );
          }
        }}
        renderSectionHeader={({ section: { title } }) =>
          title === "Featured Services" ? (
            <View style={styles.headerContainer}>
              <Text style={styles.sectionHeader}>Featured Services</Text>
              <View style={styles.headerActionContainer}>
                <Text style={styles.headerActionText}>See All</Text>
                <FontAwesome name="chevron-right" size={12} color="blue" />
              </View>
            </View>
          ) : (
            <View style={styles.headerContainer}>
              <Text style={styles.sectionHeader}>All Departments</Text>
              <View style={styles.headerActionContainer}></View>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 10, // Adjust spacing between items
    width: Dimensions.get("window").width / 3 - 20,

    // Calculate width dynamically for 3 columns
  },
  iconContainer: {
    height: 72,
    borderRadius: 36,
    backgroundColor: "gray",
    width: 72,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6, // Adjust based on your gap
  },
  itemText: {
    color: "black",
    flexWrap: "wrap",
    width: 100,
    textAlign: "center",
  },
  headerContainer: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    paddingHorizontal: 14,
    alignItems: "center",
    backgroundColor: "white",
  },
  headerTitle: {
    fontWeight: "bold",
    color: "black",
  },
  headerActionContainer: {
    flexDirection: "row",
    gap: 4,
    backgroundColor: "white",
    alignItems: "center",
  },
  headerActionText: {
    color: "blue",
    fontWeight: "300",
  },
  featuredServicesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "white",
    height: 120,
  },
  featuredItemContainer: {
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  featuredIconContainer: {
    height: 72,
    borderRadius: 36,
    backgroundColor: "gray",
    width: 72,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionHeader: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    paddingLeft: 10,
    paddingTop: 10,
  },
  categoriesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10, // Adjust as needed
  },
  categoryItem: {
    width: "33%",
    alignItems: "center",
    // Add padding or margin as needed to space them out
  },
});
