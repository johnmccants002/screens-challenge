import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CompatibilityResultCardProps {
  result: string;
}

const CompatibilityResultCard: React.FC<CompatibilityResultCardProps> = ({
  result,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: "ivory",
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  resultText: {
    fontSize: 16,
    color: "midnightblue",
  },
});

export default CompatibilityResultCard;
