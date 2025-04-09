import { Link } from 'expo-router';
import { Stack, Text, YStack } from 'tamagui';

export default function TabOneScreen() {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="$white1"
    >
      <YStack flex={1} justifyContent="center" alignItems="center" gap="$4">
        <Stack flexDirection="column" alignItems="center" gap="$2">
          <Text fontSize="$11" fontFamily="$body">
            🗞️
          </Text>
          <Text fontSize="$9" fontFamily="$body">
            iTrends
          </Text>
        </Stack>
        <Text fontSize="$5" fontFamily="$body">
          123
        </Text>
      </YStack>
      <YStack
        justifyContent="center"
        alignItems="center"
        paddingVertical="$10"
        paddingHorizontal="$5"
        gap="$1.5"
      >
        <Link href="/(tabs)/news">
          <Stack
            backgroundColor="$blue10"
            borderRadius="$2"
            flex={1}
            width="100%"
            alignItems="center"
            justifyContent="center"
            height="$4"
          >
            <Text
              testID="signInButton"
              fontFamily="$body"
              fontSize="$5"
              fontWeight="bold"
              paddingHorizontal="$6"
              paddingVertical="$2"
              color="$white1"
            >
              시작하기
            </Text>
          </Stack>
        </Link>
        <Link href="/(tabs)/news">
          <Stack
            backgroundColor="$black4"
            borderRadius="$2"
            flex={1}
            width="100%"
            alignItems="center"
            justifyContent="center"
            height="$4"
          >
            <Text
              testID="signInButton"
              fontFamily="$body"
              fontSize="$5"
              fontWeight="bold"
              paddingHorizontal="$6"
              paddingVertical="$2"
              color="$white1"
            >
              간편 회원가입
            </Text>
          </Stack>
        </Link>
      </YStack>
    </YStack>
  );
}
