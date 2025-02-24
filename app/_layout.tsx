import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform } from "react-native";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { OnboardingProvider } from "@/contexts/OnboardingContext";
import { ClerkProvider, ClerkLoaded, useAuth, useUser } from "@clerk/clerk-expo";
import { tokenCache } from "./cache";
import { PostHogProvider } from "posthog-react-native";
import { initializeRevenueCat } from "@/services/revenuecat";

SplashScreen.preventAutoHideAsync();

function AppContent() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <OnboardingProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(navbar)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </OnboardingProvider>
    </GestureHandlerRootView>
  );
}

function RevenueCatInitializer({ children }: { children: React.ReactNode }) {
  const { userId, isSignedIn} = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      if (user) {
        const userEmail = user.emailAddresses[0].emailAddress;
        initializeRevenueCat(userId, userEmail)
      }
    }
  }, [isSignedIn, userId])

  return children
}


export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
  }

  return (
    <PostHogProvider
      apiKey={process.env.EXPO_PUBLIC_POSTHOG_API_KEY}
      options={{
        host: process.env.EXPO_PUBLIC_POSTHOG_HOST,
        enableSessionReplay: true,
      }}
    >
      <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
        <ClerkLoaded>
          <RevenueCatInitializer>
            <AppContent />
          </RevenueCatInitializer>
        </ClerkLoaded>
      </ClerkProvider>
    </PostHogProvider>
  );
}