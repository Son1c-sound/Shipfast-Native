import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { superwallService } from '@/services/superwall';
import { useColorScheme } from '@/hooks/useColorScheme';
import { OnboardingProvider } from '@/contexts/OnboardingContext';

import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from './cache';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (Platform.OS !== 'web') {
      superwallService.initialize();
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file')
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey} >
      <ClerkLoaded>
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#F5F5F5' }} >
      <OnboardingProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
      </OnboardingProvider>
    </GestureHandlerRootView>
    </ClerkLoaded>
    </ClerkProvider>
  );
}
