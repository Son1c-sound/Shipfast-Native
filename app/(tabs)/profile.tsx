import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { router } from "expo-router";
import { useAuth, useUser } from "@clerk/clerk-react";

const ProfileScreen = () => {
  const { isSignedIn, signOut } = useAuth();
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
      router.push("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await user?.delete();
      console.log("account deleted, redirecting to home");
      router.push("/sign-in");
    } catch (error: any) {
      console.error("Error deleting account:", error);
    }
  };

  const profile = {
    name: firstName || "User",
    avatar: user?.imageUrl,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: profile.avatar }} style={styles.avatar} />
          </View>
          <Text style={styles.name}>Welcome, {profile.name}!</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.signOutButton]}
          onPress={isSignedIn ? handleSignOut : () => router.push("/sign-in")}
        >
          <Text style={styles.buttonText}>
            {isSignedIn ? "Sign Out" : "Sign In"}
          </Text>
        </TouchableOpacity>
        {isSignedIn && (
          <TouchableOpacity
            style={[styles.button, styles.dangerButton]}
            onPress={handleDeleteAccount}
          >
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  button: {
    padding: 16,
    margin: 10,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
  },
  signOutButton: {
    backgroundColor: "#FF7F50",
  },
  dangerButton: {
    backgroundColor: "#DC2626",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ProfileScreen;
