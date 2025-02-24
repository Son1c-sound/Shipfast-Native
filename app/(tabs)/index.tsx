import { StyleSheet, View, SafeAreaView, } from "react-native";
import { PaywallButton } from "@/components/PaywallButton";
import { usePostHog } from 'posthog-react-native';
import { useUser } from '@clerk/clerk-expo';
import { useEffect } from 'react';

export default function HomeScreen() {
  const posthog = usePostHog()
  const { user } = useUser()
  
  // this is optional, but it's a good idea to identify the user in PostHog
  useEffect(() => {
    if (user) {
      posthog.identify(user.id, {
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName} ${user.lastName}`,
      });

    }
  }, [user, posthog]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <PaywallButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
  },
});
