import PlantHomeScreen from "@/components/PlantHomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name="arrow-back-circle-outline" size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <PlantHomeScreen />
    </>
  );
};

export default Page;
