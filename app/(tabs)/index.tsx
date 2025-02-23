import { Image, StyleSheet, Platform, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemedText } from "@/components/ThemedText";
import { useSuperwall } from "@/hooks/useSuperwall";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { Redirect, useRouter } from "expo-router";
import { SUPERWALL_TRIGGERS } from "@/config/superwall";


export default function HomeScreen() {
  const { setIsOnboarded } = useOnboarding();
  const { showPaywall } = useSuperwall();
  const router = useRouter();



  const handleRestartOnboarding = async () => {
    await setIsOnboarded(false);
    router.push("/onboarding");
  };

  const handleShowPaywall = () => {
    showPaywall(SUPERWALL_TRIGGERS.ONBOARDING);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.contentContainer}>
        <ThemedText  style={styles.mainTitle}>
          🚀 Your Adventure Starts Here!
        </ThemedText>

        <View style={styles.welcomeSection}>
    
          <ThemedText type="default" style={styles.sectionText}>
            Ready to explore amazing features?
          </ThemedText>
        </View>

        <View style={styles.statsSection}>
          <ThemedText style={styles.statsTitle}>
            🎯 Your Progress
          </ThemedText>
          <ThemedText type="default" style={styles.statsText}>
            🌟 Level: Beginner
          </ThemedText>
          <ThemedText type="default" style={styles.statsText}>
            📈 Progress: Just Starting
          </ThemedText>
          <ThemedText type="default" style={styles.statsText}>
            ⭐️ Achievement: Early Explorer
          </ThemedText>
        </View>

        <View style={styles.featuresSection}>
          <ThemedText  style={styles.featuresTitle}>
            ✨ Available Features
          </ThemedText>
          <ThemedText type="default" style={styles.featureItem}>
            💎 Premium Content Access
          </ThemedText>
          <ThemedText type="default" style={styles.featureItem}>
            🔄 Personalized Onboarding
          </ThemedText>
          <ThemedText type="default" style={styles.featureItem}>
            🎨 Custom Themes
          </ThemedText>
        </View>

        <View style={styles.tipsSection}>
          <ThemedText  style={styles.tipsTitle}>
            💡 Quick Tips
          </ThemedText>
          <ThemedText type="default" style={styles.tipText}>
            🎉 Unlock premium for full access!
          </ThemedText>
          <ThemedText type="default" style={styles.tipText}>
            🔍 Explore all features in onboarding
          </ThemedText>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleShowPaywall}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Show Paywall
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={handleRestartOnboarding}
          >
            <ThemedText type="defaultSemiBold" style={styles.secondaryButtonText}>
              Restart Onboarding
            </ThemedText>
          </TouchableOpacity>
        </View>
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
  sectionText: {
    fontSize: 16,
    color: '#666',
  },
  statsSection: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  statsTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  statsText: {
    fontSize: 16,
    color: '#444',
  },
  featuresSection: {
    gap: 8,
  },
  featuresTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  featureItem: {
    fontSize: 16,
    color: '#444',
    paddingLeft: 8,
  },
  tipsSection: {
    backgroundColor: '#f0f7ff',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  tipsTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  tipText: {
    fontSize: 16,
    color: '#444',
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  buttonContainer: {
    marginTop: 24,
    gap: 12,
  },
  signInButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "black",
  },
  dangerButton: {
    backgroundColor: "#DC2626",
  },
  button: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#0A7EA4",
  },
  buttonText: {
    color: "white",
  },
  secondaryButton: {
    backgroundColor: "#0A7EA420",
  },
  secondaryButtonText: {
    color: "#0A7EA4",
  },
});