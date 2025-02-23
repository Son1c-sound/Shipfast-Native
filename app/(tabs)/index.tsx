import { Image, StyleSheet, Platform, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemedText } from "@/components/ThemedText";
import { useSuperwall } from "@/hooks/useSuperwall";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { Redirect, useRouter } from "expo-router";
import { PaywallButton } from "@/components/PaywallButton";


export default function HomeScreen() {
  const { setIsOnboarded } = useOnboarding();
  const router = useRouter();

  const handleRestartOnboarding = async () => {
    await setIsOnboarded(false);
    router.push("/onboarding");
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.contentContainer}>
        <ThemedText  style={styles.mainTitle}>
          🚀 ShipFast for Native
        </ThemedText>
          <PaywallButton />
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={handleRestartOnboarding}
          >
            <ThemedText type="defaultSemiBold" style={styles.secondaryButtonText}>
              Restart Onboarding
            </ThemedText>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32, 
  },
  contentContainer: {
    gap: 24,
  },
  mainTitle: {
    fontSize: 24,
    marginTop: 36,
  },
  welcomeSection: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 24,
  },
  tipsTitle: {
    fontSize: 20,
    marginBottom: 8,
  },

  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "black",
  },
  secondaryButton: {
    backgroundColor: "#0A7EA420",
  },
  secondaryButtonText: {
    color: "#0A7EA4",
  },
});