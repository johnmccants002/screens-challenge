import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface ZodiacSignSelectorProps {
  signs: string[];
  onSelect: (sign: string) => void;
}

const ZodiacSignSelector: React.FC<ZodiacSignSelectorProps> = ({
  signs,
  onSelect,
}) => {
  return (
    <View style={styles.selectorContainer}>
      {signs.map((sign) => (
        <TouchableOpacity
          key={sign}
          style={styles.signButton}
          onPress={() => onSelect(sign)}
        >
          <Text style={styles.signText}>{sign}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  selectorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  signButton: {
    padding: 8,
    margin: 4,
    backgroundColor: "#6a0dad",
    borderRadius: 20,
  },
  signText: {
    color: "#FFF",
  },
});

export default ZodiacSignSelector;
