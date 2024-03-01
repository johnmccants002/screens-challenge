import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { Text, TouchableOpacity } from "react-native";
import { View } from "@/components/Themed";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen
          name="costco-shop"
          options={{
            headerShown: true,
            headerLeft: () => (
              <>
                <TouchableOpacity onPress={router.back}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Shop
                  </Text>
                </TouchableOpacity>
              </>
            ),
            headerRight: () => (
              <>
                <FontAwesome name="search" color={"white"} size={20} />
              </>
            ),
            headerBackground: () => (
              <View
                style={{
                  height: "100%",
                  backgroundColor: "blue",
                  width: "100%",
                }}
              ></View>
            ),
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="restaurant-map"
          options={{
            headerShown: true,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
