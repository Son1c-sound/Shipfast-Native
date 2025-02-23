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
          {/* Top Icon and Title */}
          <View style={styles.header}>
            <MaterialCommunityIcons name="lightbulb-on" size={56} color="#000" />
            <ThemedText type="title" style={styles.title}>
              Introducing a Better Way
            </ThemedText>
          </View>

          {/* Main Feature Card */}
          <View style={styles.mainFeature}>
            <ThemedText type="defaultSemiBold" style={styles.mainTitle}>
              Your App's Core Value
            </ThemedText>
            <ThemedText style={styles.mainDescription}>
              One clear, powerful sentence that explains exactly how you solve the user's problem.
            </ThemedText>
          </View>

          {/* Benefits Section */}
          <View style={styles.benefits}>
            {benefitPoints.map((benefit, index) => (
              <View key={index} style={styles.benefit}>
                <MaterialCommunityIcons name="check-circle" size={24} color="#000" />
                <ThemedText style={styles.benefitText}>
                  {benefit}
                </ThemedText>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Button */}
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
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 32,
  },
  title: {
    fontSize: 33,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '700',
  },
  mainFeature: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 24,
    borderRadius: 16,
    marginBottom: 32,
  },
  mainTitle: {
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 12,
  },
  mainDescription: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
  benefits: {
    gap: 16,
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    paddingVertical: 8,
  },
  benefitText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  button: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});