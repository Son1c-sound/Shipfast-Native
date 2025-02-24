import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { useAuth, useUser } from "@clerk/clerk-react";
import { PaywallButton } from "./PaywallButton";
import { presentPaywall } from "@/hooks/useRevenuecat";
import { useOnboarding } from "@/contexts/OnboardingContext";

const ProfileScreen = () => {
  const { isSignedIn, signOut } = useAuth();
  const { setIsOnboarded } = useOnboarding();
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const { user } = useUser();

  useEffect(() => {
    if (user?.emailAddresses?.[0]?.emailAddress) {
      setEmail(user.emailAddresses[0].emailAddress);
    }
    if (user?.firstName) {
      setFirstName(user.firstName);
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/onboarding");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await user?.delete();
      console.log("account deleted, redirecting to home");
      router.push("/onboarding");
    } catch (error: any) {
      console.error("Error deleting account:", error);
    }
  };

  const showPayWall = async () => {
    await presentPaywall();
  };

  const profile = {
    name: firstName,
    avatar: user?.imageUrl,
  };

  const serviceLogos = [
    {
      name: "RevenueCat",
      icon: "https://avatars.githubusercontent.com/u/33013347?s=200&v=4",
    },
    {
      name: "PostHog",
      icon: "https://meta.cdn.bubble.io/f1681977711405x450818453446594000/PostHog.png",
    },
    {
      name: "Clerk",
      icon: "https://pipedream.com/s.v0/app_dBhw8k/logo/orig",
    },
    {
      name: "Apple",
      icon: "https://i.pinimg.com/736x/38/5d/86/385d8697caa605fa7ea766753b94729c.jpg",
    },
    {
      name: "Google",
      icon: "https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.serviceLogosContainer}>
          {serviceLogos.map((service, index) => (
            <View key={index} style={styles.logoContainer}>
              <Image
                source={{ uri: service.icon }}
                style={styles.serviceLogo}
              />
              <Text style={styles.logoText}>{service.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.container}>
          <Image  source={{ uri: profile.avatar || "/api/placeholder/120/120" }} style={styles.avatar}/>
          <Text style={styles.name}>{profile.name || "User"}</Text>
          <Text style={styles.email}>{email || "No email available"}</Text>
        </View>
    
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={isSignedIn ? handleSignOut : () => router.push("/sign-in")}
          >
            <Text style={styles.button}>
              {isSignedIn ? "Sign Out" : "Sign In"}
            </Text>
          </TouchableOpacity>

          {isSignedIn && (
            <TouchableOpacity
              style={[styles.buttonWrapper, styles.deleteButton]}
              onPress={handleDeleteAccount}
            >
              <Text style={styles.button}>Delete Account</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={showPayWall} style={styles.buttonWrapper}>
            <Text style={styles.button}>Show Paywall</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper}>
            <Text
              style={styles.button}
              onPress={() => {
                setIsOnboarded(false);
              }}
            >
              Restart Onboarding
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  serviceLogosContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  logoContainer: {
    alignItems: "center",
  },
  serviceLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginBottom: 4,
  },
  logoText: {
    fontSize: 10,
    color: "#666",
  },
  container: {
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: "#E1E1E1",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  buttonContainer: {
    width: "80%",
    alignItems: "center",
  },
  buttonWrapper: {
    width: "100%",
    marginBottom: 16,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "black",
    textAlign: "center",
    overflow: "hidden",
    fontSize: 16,
    fontWeight: "500",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
  },
});

export default ProfileScreen;
