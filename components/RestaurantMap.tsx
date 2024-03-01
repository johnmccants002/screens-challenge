import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps"; // This is from 'react-native-maps'
import { BottomSheet } from "react-native-btr"; // This is a library for the bottom sheet
import RestaurantScrollView from "./RestaurantCard";

const screen = Dimensions.get("window");

const RestaurantMap = () => {
  const [visible, setVisible] = useState(true);

  function toggle() {
    setVisible((visible) => !visible);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.6944,
          longitude: -73.9865,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // Customize the rest of your map props
      >
        {/* Markers for the map */}
        <Marker
          coordinate={{
            latitude: 40.6955,
            longitude: -73.9876,
          }}
        />
      </MapView>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
        // Add more props and styles for the bottom sheet
      >
        <View style={styles.bottomSheet}>
          <RestaurantScrollView />
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomSheet: {
    backgroundColor: "white",
    width: screen.width,
    height: screen.height * 0.4, // Adjust height as necessary
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    // More styling
  },
  subtitle: {
    fontSize: 18,
    // More styling
  },
  restaurantItem: {
    // Styling for the restaurant item
  },
  // More styles
});

export default RestaurantMap;
