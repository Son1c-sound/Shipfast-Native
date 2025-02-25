import Purchases, { LOG_LEVEL } from 'react-native-purchases';
import { Platform } from 'react-native';

export const initializeRevenueCat = async (userId?: string | null, email?: string | null) => {
  try {
    Purchases.setLogLevel(LOG_LEVEL.VERBOSE)

    const revenuecatGoogleApi = process.env.EXPO_PUBLIC_REVENUECAT_GOOGLE_API_KEY || '';
    const revenueAppleApi = process.env.EXPO_PUBLIC_REVENUECAT_APPLE_API_KEY || '';

    if (Platform.OS === 'ios') {
      await Purchases.configure({
        apiKey: revenueAppleApi,
      });
    } else if (Platform.OS === 'android') {
      await Purchases.configure({
        apiKey: revenuecatGoogleApi,
      });
    }
    
    if (userId) {
      try {
        await Purchases.logIn(userId);
        console.log('User successfully logged in to RevenueCat:', userId);
        
        
        if (email) {
          await Purchases.setEmail(email);
          console.log('Email set in RevenueCat:', email);
        }
        
        await checkOfferings();
      } catch (loginError) {
        console.error('Error identifying user with RevenueCat:', loginError);
      }
    } else {
      console.log('No user ID provided. User will not be able to make purchases.');
    }
  } catch (initError) {
    console.error('Error initializing RevenueCat:', initError);
  }
};

export const checkOfferings = async () => {
  try {
    const offerings = await Purchases.getOfferings();
    
    if (!offerings.current) {
      console.error('No current offering found in RevenueCat dashboard');
      return false;
    }
    
    return true;
    
  } catch (error) {
    console.error('Error fetching offerings:', error);
    return false;
  }
};