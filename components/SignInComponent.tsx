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
import Navbar from "./Navbar";

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

  const profile = {
    name: firstName,
    avatar: user?.imageUrl,
  };

  return (
    <SafeAreaView>
 
      <View style={styles.container}>
      
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <TouchableOpacity
        onPress={isSignedIn ? handleSignOut : () => router.push("/sign-in")}
      >
        <Text style={styles.button}>
          {isSignedIn ? "Sign Out" : "Sign In"}
        </Text>
      </TouchableOpacity>
      {isSignedIn && (
        <Text onPress={handleDeleteAccount} style={styles.button} >Delete Account</Text>
      )}
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    textAlign: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  button: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: 200,
    color: "#fff",
    backgroundColor: "black",
    alignItems: "center",
    textAlign: "center",
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
});

export default ProfileScreen;