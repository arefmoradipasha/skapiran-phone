import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function HomeScreen() {
  return (
    <View>
      <Text className='bg-red-700 p-10'></Text>
      <Text className='bg-green-700 p-10'></Text>
      <Text className='bg-yellow-700 p-10'></Text>
      <Text className='bg-gray-700 p-10'></Text>
      <Text className='bg-black-700 p-10'></Text>
    </View>
  );
}

