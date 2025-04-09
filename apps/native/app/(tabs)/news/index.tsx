import { Link } from 'expo-router';
import { Text, View } from 'react-native';
export default function News() {
  return (
    <View>
      <Text>News</Text>
      <Link href="/(tabs)/news/post/1">Post 1</Link>
    </View>
  );
}
