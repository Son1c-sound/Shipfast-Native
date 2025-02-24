import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface OnboardingStep {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  subtitle: string;
  image: string;
  benefitTitle: string;
  benefitDescription: string;
}

export const onboardingSteps: OnboardingStep[] = [
  {
    icon: 'shield-check',
    title: 'Your Privacy Matters',
    subtitle: 'We take security seriously to protect your data',
    image: "https://img.freepik.com/free-vector/group-concept-illustration_114360-8541.jpg?t=st=1740370432~exp=1740374032~hmac=ab6afeca4b5762e67a03f5d5161b269cb2565853af9d2bf7704c263df8cc1e1c&w=740",
    benefitTitle: 'Secure & Private',
    benefitDescription: 'Your data is fully encrypted and never shared with third parties'
  },
  {
    icon: 'flash',
    title: 'Lightning Speed',
    subtitle: 'Experience blazing fast performance',
    image: "https://img.freepik.com/free-vector/hand-drawn-people-waving-illustrated_23-2149202067.jpg?t=st=1740370462~exp=1740374062~hmac=94b9d968239fb2e1110293ad406bf468fb67e8378878f1da31715d43ed468240&w=1060",
    benefitTitle: 'Lightning Fast',
    benefitDescription: 'Get instant results with our optimized performance'
  },
  {
    icon: 'puzzle',
    title: 'Easy as 1-2-3',
    subtitle: 'Designed with simplicity in mind',
    image: "https://img.freepik.com/free-vector/group-photo-concept-illustration_114360-9708.jpg?t=st=1740370477~exp=1740374077~hmac=12a8d438ffe038b86fbdeb77e00d035bc1062b85d52def888d15ec9a67487500&w=1060",
    benefitTitle: 'Easy to Use',
    benefitDescription: 'Intuitive interface designed for seamless experience'
  }
];
