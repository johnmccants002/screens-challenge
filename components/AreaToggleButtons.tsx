import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface AreaToggleButtonsProps {
  areas: string[];
  onToggle: (area: string) => void;
}

const AreaToggleButtons: React.FC<AreaToggleButtonsProps> = ({
  areas,
  onToggle,
}) => {
  return (
    <View style={styles.toggleContainer}>
      {areas.map((area) => (
        <TouchableOpacity
          key={area}
          style={styles.toggleButton}
          onPress={() => onToggle(area)}
        >
          <Text style={styles.toggleText}>{area}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  toggleButton: {
    padding: 8,
    margin: 4,
    backgroundColor: "darkslategray",
    borderRadius: 20,
  },
  toggleText: {
    color: "#FFF",
  },
});

export default AreaToggleButtons;
