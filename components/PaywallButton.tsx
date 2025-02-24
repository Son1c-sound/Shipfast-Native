import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemedText } from "./ThemedText";
import { useSuperwall } from "@/hooks/useSuperwall";
import { SUPERWALL_TRIGGERS } from "@/config/superwall";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { router } from "expo-router";
import ProfileScreen from "./SignInComponent";

export function PaywallButton() {
  const { showPaywall } = useSuperwall();
  const { setIsOnboarded } = useOnboarding();

  const handleRestartOnboarding = async () => {
    await setIsOnboarded(false);
    router.push("/onboarding");
  };

  const handlePress = () => {
    showPaywall(SUPERWALL_TRIGGERS.ONBOARDING);
  };

  return (
    <>
    <ProfileScreen />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <ThemedText style={styles.buttontext}>Show Paywall</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.buttontext} onPress={handleRestartOnboarding}>
          Restart Onboarding
        </ThemedText>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: 200,
    color: "#fff",
    backgroundColor: "black",
    alignItems: "center",
  },
  buttontext: {
    color: "#fff",
  },
});
