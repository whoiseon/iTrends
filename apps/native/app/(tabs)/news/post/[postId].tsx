import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  const { postId } = useLocalSearchParams();
  return (
    <View>
      <Text>{postId}</Text>
    </View>
  );
}
