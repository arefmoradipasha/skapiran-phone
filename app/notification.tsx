import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function NotificationScreen() {
  return (
    <View className='bg-yellow-200 dark:bg-yellow-900'>
      <Text className='mt-2 text-red-700'>salam </Text>
      <Text className='mt-2 text-red-700'>salam </Text>
    </View>
  );
}

