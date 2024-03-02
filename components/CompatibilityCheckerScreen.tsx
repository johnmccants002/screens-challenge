import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ZodiacSignSelector from "./ZodiacSignSelector";
import CompatibilityResultCard from "./CompatibilityResultCard";
import AreaToggleButtons from "./AreaToggleButtons";

// Assuming these are your zodiac signs
const signs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];
const areas = ["Love", "Friendship", "Work"];

const CompatibilityCheckerScreen: React.FC = () => {
  const [selectedSign1, setSelectedSign1] = useState<string | null>(null);
  const [selectedSign2, setSelectedSign2] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string>("Love");
  const [compatibilityResult, setCompatibilityResult] = useState<string>(
    "Select two signs to see their compatibility."
  );

  const handleSelectSign = (sign: string, position: number) => {
    if (position === 1) {
      setSelectedSign1(sign);
    } else {
      setSelectedSign2(sign);
    }

    // Check if both signs are selected
    if (
      (position === 1 && selectedSign2) ||
      (position === 2 && selectedSign1)
    ) {
      // Here, you would call your API or function to fetch the compatibility result
      // For demonstration, we'll just set a placeholder result
      setCompatibilityResult(
        `Compatibility between ${sign} and ${
          position === 1 ? selectedSign2 : selectedSign1
        } for ${selectedArea}...`
      );
    }
  };

  const handleAreaToggle = (area: string) => {
    setSelectedArea(area);
    // Here, you should re-fetch the compatibility based on the new area
    // Assuming both signs are selected, fetch the new result
    if (selectedSign1 && selectedSign2) {
      // Placeholder for fetching new result based on area
      setCompatibilityResult(
        `Compatibility between ${selectedSign1} and ${selectedSign2} for ${area}...`
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Select Two Zodiac Signs</Text>
      <ZodiacSignSelector
        signs={signs}
        onSelect={(sign) => handleSelectSign(sign, 1)}
      />
      <ZodiacSignSelector
        signs={signs}
        onSelect={(sign) => handleSelectSign(sign, 2)}
      />
      <AreaToggleButtons areas={areas} onToggle={handleAreaToggle} />
      <CompatibilityResultCard result={compatibilityResult} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default CompatibilityCheckerScreen;
