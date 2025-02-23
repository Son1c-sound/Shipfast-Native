import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={24}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 40,
        height: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      android: {
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        elevation: 5,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: Platform.OS === 'ios' ? 6 : 4,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  tabBarIcon: {
    marginTop: Platform.OS === 'ios' ? 6 : 4,
  },
  icon: {
    marginBottom: -4,
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
