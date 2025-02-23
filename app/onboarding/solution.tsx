import { StyleSheet, View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const benefitPoints = [
  'Key benefit or feature that solves their pain',
  'Another important advantage of your solution',
  'A third compelling reason to use your app'
];

export default function SolutionScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/onboarding/features');
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          style={styles.scroll} 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentWrapper}>
            <View style={styles.header}>
              <MaterialCommunityIcons name="lightbulb-on" size={48} color="#0A7EA4" />
              <ThemedText type="title" style={styles.title}>
                Introducing a Better Way
              </ThemedText>
            </View>

            <View style={styles.mainFeature}>
              <ThemedText type="defaultSemiBold" style={styles.mainTitle}>
                Your App's Core Value
              </ThemedText>
              <ThemedText style={styles.mainDescription}>
                One clear, powerful sentence that explains exactly how you solve the user's problem.
              </ThemedText>
            </View>

            <View style={styles.benefits}>
              {benefitPoints.map((benefit, index) => (
                <View key={index} style={styles.benefit}>
                  <MaterialCommunityIcons name="check-circle" size={24} color="#0A7EA4" />
                  <ThemedText style={styles.benefitText}>
                    {benefit}
                  </ThemedText>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <ThemedText type="defaultSemiBold" style={styles.buttonText}>
              Show Me How
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    minHeight: '100%',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    gap: 24,
  },
  header: {
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  mainFeature: {
    backgroundColor: '#0A7EA410',
    padding: 24,
    borderRadius: 20,
    gap: 8,
    width: '100%',
  },
  mainTitle: {
    fontSize: 22,
    textAlign: 'center',
  },
  mainDescription: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 22,
  },
  benefits: {
    gap: 12,
    width: '100%',
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#0A7EA408',
    padding: 16,
    borderRadius: 12,
  },
  benefitText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  button: {
    backgroundColor: '#0A7EA4',
    padding: 16,
    borderRadius: 33,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});