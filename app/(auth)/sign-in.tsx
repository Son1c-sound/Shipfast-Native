import React from "react"
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import SignInWithOAuth from "./oauth"

export default function LoginSection() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(255,255,255,0.8)", "rgba(255,255,255,0.95)"]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.logoWrapper}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&auto=format&fit=crop&q=80",
              }}
              style={styles.logo}
            />
            <View style={styles.logoOverlay} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>Sign in to continue</Text>
            <Text style={styles.subtitle}>
              Access your personalized experience
            </Text>
          </View>

          <View style={styles.authContainer}>
            <SignInWithOAuth />
          </View>

          <Text style={styles.termsText}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const LOGO_SIZE = Math.min(Math.max(SCREEN_WIDTH * 0.2, 80), 96)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  content: {
    width: "100%",
    maxWidth: 360,
    alignItems: "center",
  },
  logoWrapper: {
    position: "relative",
    marginBottom: 32,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
  },
  logoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
  authContainer: {
    width: "100%",
    marginBottom: 24,
  },
  termsText: {
    fontSize: 12,
    color: "#999999",
    textAlign: "center",
    maxWidth: 280,
  },
})