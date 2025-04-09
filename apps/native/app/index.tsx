import { Link } from 'expo-router';
import { Text, YStack } from 'tamagui';

export default function TabOneScreen() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space="$2">
      <Link href="/(tabs)/news">
        <Text fontSize="$11" fontFamily="$body">
          iTrends
        </Text>
      </Link>
    </YStack>
  );
}
