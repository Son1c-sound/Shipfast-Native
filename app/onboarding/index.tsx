import { StyleSheet, View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboarding/solution');
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.main}>
            <ThemedText type="title" style={styles.title}>
              <Image 
                style={styles.image} 
                src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" 
              /> 
            </ThemedText>
            <View style={styles.subtitleContainer}>
              <ThemedText style={styles.subtitle}>
                A short, compelling tagline that captures your app's value
              </ThemedText>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <ThemedText type="defaultSemiBold" style={styles.buttonText}>
                Get Started
              </ThemedText>
            </TouchableOpacity>
          </View>
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
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  subtitleContainer: {
    paddingHorizontal: 32,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    marginHorizontal: -24,
    paddingHorizontal: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  button: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});