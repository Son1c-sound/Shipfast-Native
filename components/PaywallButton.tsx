import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemedText } from "./ThemedText";
import { SUPERWALL_TRIGGERS } from "@/config/superwall";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { router } from "expo-router";
import ProfileScreen from ".";

export function PaywallButton() {

  const handleRestartOnboarding = async () => {
    await 
    router.push("/onboarding");
  };


  return (
    <>
    <ProfileScreen />
  
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
