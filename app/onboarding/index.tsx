import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeIn, FadeInRight } from "react-native-reanimated";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { onboardingSteps, type OnboardingStep } from "./OnboardingData";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const { setIsOnboarded } = useOnboarding();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < onboardingSteps.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setIsOnboarded(true);
    }
  };

  const currentStep = onboardingSteps[activeIndex];

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Animated.View
            key={`header-${activeIndex}`}
            entering={FadeIn.delay(100)}
            style={styles.header}
          >
            <ThemedText type="title" style={styles.title}>
              {currentStep.title}
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              {currentStep.subtitle}
            </ThemedText>
          </Animated.View>

          <Animated.View
            key={`image-${activeIndex}`}
            entering={FadeIn.delay(200)}
            style={styles.imageContainer}
          >
            <Image
              style={styles.image}
              source={{
                uri: currentStep.image,
              }}
              resizeMode="contain"
            />
          </Animated.View>

          <Animated.View
            key={`benefit-${activeIndex}`}
            entering={FadeInRight.delay(300)}
            style={styles.benefitContainer}
          >
            <View style={styles.inlineBenefit}>
              <MaterialCommunityIcons
                name={currentStep.icon}
                size={20}
                color="#007AFF"
              />
              <ThemedText style={styles.benefitText}>
                {currentStep.benefitDescription}
              </ThemedText>
            </View>
          </Animated.View>
        </View>

        <View style={styles.footer}>
          <View style={styles.dotsContainer}>
            {onboardingSteps.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, index === activeIndex && styles.activeDot]}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              {activeIndex < onboardingSteps.length - 1
                ? "Next"
                : "Get Started"}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center", 
    paddingTop: 0,
  },
  header: {
    alignItems: "center",
    paddingBottom: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.8,
    lineHeight: 22,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    marginTop: 0,
  },
  image: {
    width: width * 0.8,
    height: width * 0.6,
    borderRadius: 16,
  },
  benefitContainer: {
    justifyContent: "center",
    paddingVertical: 20,
  },
  inlineBenefit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  benefitText: {
    fontSize: 15,
    opacity: 0.8,
    flex: 1,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    gap: 16,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E5E5E5",
  },
  activeDot: {
    width: 16,
    backgroundColor: "#007AFF",
  },
});
