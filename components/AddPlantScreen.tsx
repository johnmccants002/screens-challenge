import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  TextInput,
  Appbar,
  Snackbar,
  IconButton,
} from "react-native-paper";
import * as ImagePicker from "expo-image-picker"; // Assuming Expo is used for image picking
import { useRouter } from "expo-router";

type PlantData = {
  name: string;
  photoUri: string;
  wateringFrequency: string;
};

const AddPlantScreen: React.FC = () => {
  const [plantData, setPlantData] = useState<PlantData>({
    name: "",
    photoUri: "",
    wateringFrequency: "",
  });
  const router = useRouter();
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);

  const handleSave = () => {
    // Implement save logic here
    console.log(plantData);
    setSnackbarVisible(true); // Show confirmation message
  };

  const pickImage = async () => {
    // No permissions request included, assuming permissions are handled elsewhere
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPlantData({ ...plantData, photoUri: result.uri });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        {/* Implement navigation logic */}
        <Appbar.Content title="Add New Plant" />
      </Appbar.Header>
      <TextInput
        label="Plant Name"
        value={plantData.name}
        onChangeText={(text) => setPlantData({ ...plantData, name: text })}
        style={styles.input}
      />
      <Button
        icon="camera"
        mode="outlined"
        onPress={pickImage}
        style={styles.button}
      >
        Upload Photo
      </Button>
      {plantData.photoUri ? (
        <IconButton icon="check" size={20} style={{ margin: 10 }} />
      ) : null}
      <TextInput
        label="Watering Frequency (days)"
        value={plantData.wateringFrequency}
        onChangeText={(text) =>
          setPlantData({ ...plantData, wateringFrequency: text })
        }
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save Plant
      </Button>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        Plant added successfully!
      </Snackbar>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    margin: 10,
  },
});

export default AddPlantScreen;
